# Generated by Django 3.0.4 on 2020-04-04 09:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('aemter', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='unterbereich',
            name='referat',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='aemter.Referat'),
            preserve_default=False,
        ),
    ]