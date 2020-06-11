# Generated by Django 3.0.4 on 2020-03-31 19:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('aemter', '0001_initial'),
        ('mitglieder', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mitglied',
            name='funktion',
        ),
        migrations.CreateModel(
            name='MitgliedAmt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('funktion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aemter.Funktion')),
                ('mitglied', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mitglieder.Mitglied')),
            ],
        ),
    ]
