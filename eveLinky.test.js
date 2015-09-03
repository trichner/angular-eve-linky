describe('EveLinky', function () {
    beforeEach(module('trichner.angular-eve-linky'));

    var service;
    beforeEach(inject(function (_EveLinky_) {
        service = _EveLinky_;
    }));

    it('should link characters', function () {
        expect(service.urlCharacter(698922015,'Thomion')).toEqual("<url=showinfo:1377//698922015>Thomion</url>");
    });

    it('should link corporation', function () {
        expect(service.urlCorporation(917701062,'EVE University')).toEqual("<url=showinfo:2//917701062>EVE University</url>");
    });

    it('should link alliance', function () {
        expect(service.urlAlliance(937872513,'Ivy League')).toEqual("<url=showinfo:16159//937872513>Ivy League</url>");
    });

    it('should link channel', function () {
        expect(service.urlChannel(-9518631,'Q&A.EUNI')).toEqual("<url=joinChannel:-9518631>Q&A.EUNI</url>");
    });

    it('should link fitting', function () {
        expect(service.urlFitting('17736:2048;1:1952;1:26076;1:16487;1:31944;1:4348;1:13943;3:26380;1:1999;1:3057;4:17559;1:1978;3:19119;1:2364;1:2456;5:23717;5:12816;11:12820;2:28999;3::','Thanks for the fish')).toEqual("<url=fitting:17736:2048;1:1952;1:26076;1:16487;1:31944;1:4348;1:13943;3:26380;1:1999;1:3057;4:17559;1:1978;3:19119;1:2364;1:2456;5:23717;5:12816;11:12820;2:28999;3::>Thanks for the fish</url>");
    });

    it('should link weburl', function () {
        expect(service.urlWeb('http://http://www.eveuniversity.org','E-Uni')).toEqual("<url=http://http://www.eveuniversity.org>E-Uni</url>");
    });

    it('should link items', function () {
        expect(service.urlItem(17765,'Exotic Dancers, Female')).toEqual("<url=showinfo:17765>Exotic Dancers, Female</url>");
    });
});