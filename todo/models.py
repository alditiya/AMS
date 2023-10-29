from django.db import models

# Create your models here.

class Todo(models.Model):
    nameDoc = models.CharField("Nama Dokumen", max_length=255, blank=False)
    noDoc = models.CharField("Nomor Dokumen", max_length=25, null=False)

    class JenisDokumen(models.TextChoices):

        AKTAJUALBELI = "AJB", ("Akta Jual Beli")
        SURATHAKMILIK = "SHM", ("Surat Hak Milik")
        PAJAKBUMIBANGUNAN = "PBB", ("Pajak Bumi Bangunan")
        HAKGUNABANGUNAN = "HGB", ("Hak Guna Bangunan")
        BELUMDIISI = "Blank", ("Belum di isi")

    jenisDokumen = models.CharField("Jenis Dokumen",
                                    max_length=6,
                                    choices=JenisDokumen.choices,
                                    default=JenisDokumen.BELUMDIISI
                                    )

    def is_upperclass(self):
        return self.jenisDokumen in {
            self.JenisDokumen.BELUMDIISI,
        }

    alamatProperti = models.CharField(
        "Alamat Properti atau Bangunan", max_length=255, default="Indonesia")
    ppat = models.CharField(
        "Pejabat Pembuat Akta Tanah", max_length=255)
    pdf = models.FileField("Unggah Dokumen", upload_to='store/pdfs')
    
    def __str__(self): # type: ignore
        return self.pdf
    
    body = models.CharField(max_length=200)
    completed = models.BooleanField("Status", default=False)
    updated = models.DateTimeField("Update Date", auto_now=True)
    created = models.DateTimeField("Create Date", auto_now_add=True)

    def __str__(self):
        return self.body