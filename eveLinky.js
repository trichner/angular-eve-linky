/**
 * eveLinky
 *
 * Angular service to assemble URLs for Eve Online.
 *
 *  Created: 30.08.2015
 *  Author: Thomas Richner - mail@trichner.ch
 */

angular.module('trichner.angular-eve-linky', [])
    .factory('EveLinky', function () {
        var TEMPLATES = {
            CORPORATION: "<url=showinfo:2//{id}>{name}</url>",
            CHARACTER: "<url=showinfo:1377//{id}>{name}</url>",
            ALLIANCE: "<url=showinfo:16159//{id}>{name}</url>",
            CHANNEL: "<url=joinChannel:{id}>{name}</url>",
            FITTING: "<url=fitting:{dna}>{name}</url>",
            ITEM: "<url=showinfo:{id}>{name}</url>",
            WEBURL: "<url={url}>{name}</url>"
        }

        function interpolateUrl(template, values) {
            for (var key in values) {
                template = template.replace(handlebar(key), values[key]);
            }
            return template;
        }

        function handlebar(key) {
            return '{'.concat(String(key)).concat('}');
        }

        return {
            urlCorporation: function (id, name) {
                return interpolateUrl(TEMPLATES.CORPORATION, {id: id, name: name});
            },
            urlAlliance: function (id, name) {
                return interpolateUrl(TEMPLATES.ALLIANCE, {id: id, name: name});
            },
            urlChannel: function (id, name) {
                return interpolateUrl(TEMPLATES.CHANNEL, {id: id, name: name});
            },
            urlCharacter: function (id, name) {
                return interpolateUrl(TEMPLATES.CHARACTER, {id: id, name: name});
            },
            urlItem: function (id, name) {
                return interpolateUrl(TEMPLATES.ITEM, {id: id, name: name});
            },
            urlFitting: function (dna, name) {
                return interpolateUrl(TEMPLATES.FITTING, {dna: dna, name: name});
            },
            urlWeb: function (url, name) {
                return interpolateUrl(TEMPLATES.WEBURL, {url: url, name: name});
            }
        }
    });