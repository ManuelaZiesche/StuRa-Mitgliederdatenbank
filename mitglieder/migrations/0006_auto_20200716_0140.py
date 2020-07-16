# Generated by Django 3.0.3 on 2020-07-16 01:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mitglieder', '0005_auto_20200619_2349'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historicalprevmitgliedamt',
            name='amtszeit_beginn',
        ),
        migrations.RemoveField(
            model_name='historicalprevmitgliedamt',
            name='amtszeit_ende',
        ),
        migrations.RemoveField(
            model_name='prevmitgliedamt',
            name='amtszeit_beginn',
        ),
        migrations.RemoveField(
            model_name='prevmitgliedamt',
            name='amtszeit_ende',
        ),
        migrations.CreateModel(
            name='MitgliedNummerPaar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nummer', models.IntegerField()),
                ('mitglied', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mitglieder.Mitglied')),
            ],
        ),
        migrations.AlterField(
            model_name='prevmitgliedamt',
            name='members',
            field=models.ManyToManyField(to='mitglieder.MitgliedNummerPaar'),
        ),
    ]
