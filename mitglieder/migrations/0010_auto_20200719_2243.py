# Generated by Django 3.0.3 on 2020-07-19 22:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mitglieder', '0009_auto_20200719_2232'),
    ]

    operations = [
        migrations.AddField(
            model_name='historicalmitgliedamt',
            name='amtszeit_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='mitgliedamt',
            name='amtszeit_count',
            field=models.IntegerField(default=0),
        ),
    ]
