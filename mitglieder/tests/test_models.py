from django.test import TestCase
from mitglieder.models import *
from aemter.models import *

class TestModels(TestCase):

    def setUp(self):
        self.mitglied1 = Mitglied.objects.create(
            name = "Peter",
            vorname = "Hans",
            spitzname = "Hansi",
            strasse = "Straße der Freiheit",
            hausnr = "1",
            plz = "01642",
            ort = "Adelsdorf",
            tel_mobil = "0352075199"
        )

        self.referat1 = Organisationseinheit.objects.create(
            bezeichnung = "myreferat"
        )

        self.unterbereich1 = Unterbereich.objects.create(
            bezeichnung = "myunterbereich",
            referat = self.referat1
        )

        self.amt1 = Amt.objects.create(
            bezeichnung = "myamt",
            workload = 4,
            referat = self.referat1,
            unterbereich = self.unterbereich1
        )

        self.mitgliedamt1 = MitgliedAmt.objects.create(
            mitglied = self.mitglied1,
            amt = self.amt1
        )

        self.mitgliedmail1 = MitgliedMail.objects.create(
            mitglied = self.mitglied1,
            email = "sxxxxx@htw-dresden.de"
        )

    def test_mitglied_toString(self):
        self.assertEquals(
            self.mitglied1.__str__(),
            "Hans Peter")

    def test_mitgliedAmt_toString(self):
        self.assertEquals(
            self.mitgliedamt1.__str__(),
            "Hans Peter, myamt myunterbereich (Organisationseinheit myreferat)")

    def test_mitgliedMail_toString(self):
        self.assertEquals(
            self.mitgliedmail1.__str__(),
            "sxxxxx@htw-dresden.de Hans Peter")
