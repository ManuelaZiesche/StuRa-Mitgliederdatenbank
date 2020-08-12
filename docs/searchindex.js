Search.setIndex({docnames:["code/aemter","code/checklisten","code/commands","code/historie","code/importscripts","code/login","code/mitglieder","code/tests","developer/deployment","developer/introductionDevelopement","index","masterCodeDoc","masterDeveloperDoc","masterUserDoc","user/alterFunktion","user/alterMitglied","user/alterOrganisationseinheit","user/alterUnterbereich","user/createAdmin","user/createAllgemeineAufgaben","user/createCheckliste","user/createFunktionRechte","user/createNewFunktion","user/createNewMitglied","user/createNewOrganisationseinheit","user/createNewUnterbereich","user/createUser","user/deleteCheckliste","user/deleteFunktion","user/deleteMitglied","user/deleteOrganisationseinheit","user/deleteUnterbereich"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["code/aemter.rst","code/checklisten.rst","code/commands.rst","code/historie.rst","code/importscripts.rst","code/login.rst","code/mitglieder.rst","code/tests.rst","developer/deployment.rst","developer/introductionDevelopement.rst","index.rst","masterCodeDoc.rst","masterDeveloperDoc.rst","masterUserDoc.rst","user/alterFunktion.rst","user/alterMitglied.rst","user/alterOrganisationseinheit.rst","user/alterUnterbereich.rst","user/createAdmin.rst","user/createAllgemeineAufgaben.rst","user/createCheckliste.rst","user/createFunktionRechte.rst","user/createNewFunktion.rst","user/createNewMitglied.rst","user/createNewOrganisationseinheit.rst","user/createNewUnterbereich.rst","user/createUser.rst","user/deleteCheckliste.rst","user/deleteFunktion.rst","user/deleteMitglied.rst","user/deleteOrganisationseinheit.rst","user/deleteUnterbereich.rst"],objects:{"aemter.models":{Funktion:[11,1,1,""],FunktionRecht:[11,1,1,""],HistoricalFunktion:[11,1,1,""],HistoricalFunktionRecht:[11,1,1,""],HistoricalOrganisationseinheit:[11,1,1,""],HistoricalRecht:[11,1,1,""],HistoricalUnterbereich:[11,1,1,""],Organisationseinheit:[11,1,1,""],Recht:[11,1,1,""],Unterbereich:[11,1,1,""]},"aemter.models.Funktion":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],funktionrecht_set:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],max_members:[11,3,1,""],mitgliedamt_set:[11,3,1,""],objects:[11,3,1,""],organisationseinheit:[11,3,1,""],organisationseinheit_id:[11,3,1,""],save_without_historical_record:[11,4,1,""],tostring:[11,4,1,""],unterbereich:[11,3,1,""],unterbereich_id:[11,3,1,""],workload:[11,3,1,""]},"aemter.models.FunktionRecht":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],funktion:[11,3,1,""],funktion_id:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],objects:[11,3,1,""],recht:[11,3,1,""],recht_id:[11,3,1,""],save_without_historical_record:[11,4,1,""]},"aemter.models.HistoricalFunktion":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],max_members:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],organisationseinheit:[11,3,1,""],organisationseinheit_id:[11,3,1,""],prev_record:[11,4,1,""],revert_url:[11,4,1,""],unterbereich:[11,3,1,""],unterbereich_id:[11,3,1,""],workload:[11,3,1,""]},"aemter.models.HistoricalFunktionRecht":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],funktion:[11,3,1,""],funktion_id:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],prev_record:[11,4,1,""],recht:[11,3,1,""],recht_id:[11,3,1,""],revert_url:[11,4,1,""]},"aemter.models.HistoricalOrganisationseinheit":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],funktionen_ohne_unterbereich_count:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],prev_record:[11,4,1,""],revert_url:[11,4,1,""]},"aemter.models.HistoricalRecht":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],prev_record:[11,4,1,""],revert_url:[11,4,1,""]},"aemter.models.HistoricalUnterbereich":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],organisationseinheit:[11,3,1,""],organisationseinheit_id:[11,3,1,""],prev_record:[11,4,1,""],revert_url:[11,4,1,""]},"aemter.models.Organisationseinheit":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],funktion_set:[11,3,1,""],funktionen_ohne_unterbereich_count:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],objects:[11,3,1,""],save_without_historical_record:[11,4,1,""],unterbereich_set:[11,3,1,""]},"aemter.models.Recht":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],checklisterecht_set:[11,3,1,""],funktionrecht_set:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],objects:[11,3,1,""],save_without_historical_record:[11,4,1,""]},"aemter.models.Unterbereich":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],funktion_set:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],objects:[11,3,1,""],organisationseinheit:[11,3,1,""],organisationseinheit_id:[11,3,1,""],save_without_historical_record:[11,4,1,""]},"aemter.views":{main_screen:[11,5,1,""]},"bin.management.commands":{delete_old_historie:[11,0,0,"-"]},"bin.management.commands.delete_old_historie":{Command:[11,1,1,""]},"bin.management.commands.delete_old_historie.Command":{handle:[11,4,1,""],help:[11,3,1,""]},"checklisten.models":{Aufgabe:[11,1,1,""],Checkliste:[11,1,1,""],ChecklisteAufgabe:[11,1,1,""],ChecklisteRecht:[11,1,1,""],HistoricalAufgabe:[11,1,1,""],HistoricalCheckliste:[11,1,1,""],HistoricalChecklisteAufgabe:[11,1,1,""],HistoricalChecklisteRecht:[11,1,1,""]},"checklisten.models.Aufgabe":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],checklisteaufgabe_set:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],objects:[11,3,1,""],save_without_historical_record:[11,4,1,""]},"checklisten.models.Checkliste":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],amt:[11,3,1,""],amt_id:[11,3,1,""],checklisteaufgabe_set:[11,3,1,""],checklisterecht_set:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],mitglied:[11,3,1,""],mitglied_id:[11,3,1,""],objects:[11,3,1,""],save_without_historical_record:[11,4,1,""]},"checklisten.models.ChecklisteAufgabe":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],abgehakt:[11,3,1,""],aufgabe:[11,3,1,""],aufgabe_id:[11,3,1,""],checkliste:[11,3,1,""],checkliste_id:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],objects:[11,3,1,""],save_without_historical_record:[11,4,1,""]},"checklisten.models.ChecklisteRecht":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],abgehakt:[11,3,1,""],checkliste:[11,3,1,""],checkliste_id:[11,3,1,""],history:[11,3,1,""],id:[11,3,1,""],objects:[11,3,1,""],recht:[11,3,1,""],recht_id:[11,3,1,""],save_without_historical_record:[11,4,1,""]},"checklisten.models.HistoricalAufgabe":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],bezeichnung:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],prev_record:[11,4,1,""],revert_url:[11,4,1,""]},"checklisten.models.HistoricalCheckliste":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],amt:[11,3,1,""],amt_id:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],mitglied:[11,3,1,""],mitglied_id:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],prev_record:[11,4,1,""],revert_url:[11,4,1,""]},"checklisten.models.HistoricalChecklisteAufgabe":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],abgehakt:[11,3,1,""],aufgabe:[11,3,1,""],aufgabe_id:[11,3,1,""],checkliste:[11,3,1,""],checkliste_id:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],prev_record:[11,4,1,""],revert_url:[11,4,1,""]},"checklisten.models.HistoricalChecklisteRecht":{DoesNotExist:[11,2,1,""],MultipleObjectsReturned:[11,2,1,""],abgehakt:[11,3,1,""],checkliste:[11,3,1,""],checkliste_id:[11,3,1,""],get_default_history_user:[11,4,1,""],get_history_type_display:[11,4,1,""],get_next_by_history_date:[11,4,1,""],get_previous_by_history_date:[11,4,1,""],history_change_reason:[11,3,1,""],history_date:[11,3,1,""],history_id:[11,3,1,""],history_object:[11,3,1,""],history_type:[11,3,1,""],history_user:[11,3,1,""],history_user_id:[11,3,1,""],id:[11,3,1,""],instance:[11,4,1,""],instance_type:[11,3,1,""],next_record:[11,4,1,""],objects:[11,3,1,""],prev_record:[11,4,1,""],recht:[11,3,1,""],recht_id:[11,3,1,""],revert_url:[11,4,1,""]},"checklisten.templatetags.t_checklisten":{get_perms:[11,0,0,"-"],get_tasks:[11,0,0,"-"]},"checklisten.templatetags.t_checklisten.get_perms":{get_perms:[11,5,1,""]},"checklisten.templatetags.t_checklisten.get_tasks":{get_tasks:[11,5,1,""]},"checklisten.views":{abhaken:[11,5,1,""],erstellen:[11,5,1,""],get_funktionen:[11,5,1,""],loeschen:[11,5,1,""],main_screen:[11,5,1,""]},"historie.templatetags.t_historie":{get_associated_data:[11,0,0,"-"],to_class_name:[11,0,0,"-"]},"historie.templatetags.t_historie.get_associated_data":{get_associated_data:[11,5,1,""]},"historie.templatetags.t_historie.to_class_name":{to_class_name:[11,5,1,""]},"historie.views":{fetch_entries:[11,5,1,""],list:[11,5,1,""]},"login.views":{logout_request:[11,5,1,""],main_screen:[11,5,1,""]},"mitglieder.views":{bereiche_laden:[11,5,1,""],email_html_laden:[11,5,1,""],email_loeschen:[11,5,1,""],erstellen:[11,5,1,""],funktion_loeschen:[11,5,1,""],funktionen_html_laden:[11,5,1,""],funktionen_laden:[11,5,1,""],funktionen_max_member_ueberpruefen:[11,5,1,""],main_screen:[11,5,1,""],mitgliedBearbeitenView:[11,5,1,""],mitgliedErstellenView:[11,5,1,""],mitglied_laden:[11,5,1,""],mitglieder_loeschen:[11,5,1,""],speichern:[11,5,1,""],suchen:[11,5,1,""]},aemter:{models:[11,0,0,"-"],views:[11,0,0,"-"]},checklisten:{models:[11,0,0,"-"],views:[11,0,0,"-"]},historie:{views:[11,0,0,"-"]},login:{views:[11,0,0,"-"]},mitglieder:{views:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","exception","Python exception"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:exception","3":"py:attribute","4":"py:method","5":"py:function"},terms:{"000":[8,12],"100":[7,11],"101":[7,11],"103":[7,11],"1339":[7,11],"187":[7,11],"205":[7,11],"365":[2,11],"664":[8,12],"\u00e4mter":[3,6,10],"\u00e4mtern":[6,11],"\u00e4nderung":[3,11],"\u00e4nderungen":[3,11],"\u00e4nderungsoper":[3,11],"\u00fcber":[3,6,7,11],"\u00fcbergeben":[3,11],"\u00fcbergebenen":[3,11],"\u00fcbernommen":[3,11],"\u00fcberpr\u00fcft":[6,11],"abh\u00e4ngigkeiten":10,"anschlie\u00dfend":[3,6,11],"au\u00dferdem":[3,11],"ausf\u00fchren":[3,11,13,30],"ausgef\u00fcllt":[6,11],"ausgel\u00f6st":[3,6,11],"ausgew\u00e4hlt":[6,11,13,30],"ausgew\u00e4hlten":[6,11],"ausl\u00f6sen":[6,11],"auswahlm\u00f6glichkeiten":[6,11],"bef\u00fcllt":[6,11],"ben\u00f6tigt":[3,7,11],"bet\u00e4tigung":[6,11],"case":[1,11],"class":[0,1,2,7,11],"dazugeh\u00f6rig":[6,11],"dazugeh\u00f6rigen":[6,11],"default":[0,1,7,8,11,12],"durchgef\u00fchrt":[6,11],"eingef\u00fcgt":[6,11],"eintr\u00e4g":[3,6,11],"eintr\u00e4gen":[3,11],"enh\u00e4lt":[3,11],"enth\u00e4lt":[3,6,11],"erm\u00f6glicht":[3,6,11],"f\u00fcr":[3,6,11],"final":[1,11,13,18],"folgenderma\u00dfen":[3,11],"function":[10,20,23,24],"g\u00fcltig":[6,11],"g\u00fcltigkeits\u00fcberpr\u00fcfung":[],"ge\u00e4ndert":[13,16],"geh\u00f6ren":[3,11],"geh\u00f6renden":[3,11],"geh\u00f6rig":[3,11],"geh\u00f6rt":[3,11],"gel\u00f6scht":[6,11,13,30],"gew\u00e4hlten":[6,11],"gew\u00e4hrt":[3,6,11],"gew\u00fcnscht":[3,11],"h\u00e4ngen":[6,11],"hei\u00dfen":[7,11],"hierf\u00fcr":[3,11],"hinzuf\u00fcgen":[3,6,11,13,19,21,22,23,24,25,26],"hinzugef\u00fcgt":[6,11,13,24],"hinzuzuf\u00fcgen":[6,11],"import":[4,8,11,12],"int":[1,3,11],"k\u00f6nnen":[3,6,11],"l\u00f6schbutton":[6,11],"l\u00f6schen":[3,6,11,13,30],"l\u00f6scht":[6,11],"l\u00f6schvorg\u00e4ng":[6,11],"men\u00fc":[3,11],"new":[1,7,10,11,21,23,26],"null":[0,1,11],"pr\u00e4sentiert":[3,11],"pr\u00fcfung":[6,11],"public":[8,12],"r\u00fcckgabewert":[],"rechteeinschr\u00e4nkung":[6,11],"return":[0,1,3,4,5,6,7,11],"s\u00e4mtlich":[3,6,11],"static":[0,1,8,11,12],"test_1mitgliedhinzuf\u00fcgen_assuperus":[7,11],"test_50mitgliederhinzuf\u00fcgen_assuperuser_lookasus":[7,11],"true":[0,1,11],"try":[1,11],"verf\u00fcgung":[6,11],"verst\u00e4ndlich":[3,11],"while":[1,11],"zugeh\u00f6rig":[0,11],"zugeh\u00f6rigen":[0,3,11],"zugriffsbeschr\u00e4nkung":[3,6,11],"zul\u00e4ssig":[3,11],"zun\u00e4chst":[6,11],"zur\u00fcck":[3,11],"zur\u00fcckgegeben":[],"zus\u00e4tzlich":[3,6,11],"zus\u00e4tzlichen":[3,11],And:[8,12],But:[7,11],Das:[3,6,11],For:[2,11],IDs:[1,3,11],Ids:[6,11],Suche:[6,11],The:[1,2,5,7,8,9,11,12,13,20],Then:[8,12,13,22,24],There:[13,17,21],Will:[1,11],With:[13,23],__init__:[7,11],__option:[13,20],_createfunctionorganizationalunit:[13,22],aber:[3,11],abgehakt:[1,11],abhaken:[1,11],abov:[8,12,13,18,23],acc:[8,12],accept:[13,26,27,29],access:[5,11],accessor:[0,1,11],accident:[1,11],accord:[1,11],account:[2,7,9,11,12,13,18,26],achiev:[8,12],activ:[8,12],add:[7,8,10,11,12,19,20,21,23,25,26],added:[1,11],addmitgli:[7,11],addmitgliedwithparamet:[7,11],address:[8,12],adjust:[7,10,11],admin:[0,1,3,6,7,9,10,11,12,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31],administr:[1,3,6,11,13,18],administratoren:[3,11],adminpanel:[7,11],adress:[6,11],adressen:[3,6,11],aemter:[0,3,10],aemter_html_laden:[],aemter_laden:[],aemteruebersicht:[7,11],after:[1,7,8,11,12,13,30],ajax:[1,6,11],aktion:[13,30],aktuellen:[3,11],alia:[0,1,8,11,12],all:[0,1,2,3,5,6,7,8,9,11,12,13,15,26],allen:[6,11],aller:[6,11],allow:[1,8,11,12,13,22],allowed_host:[8,12],alreadi:[1,5,11],als:[3,6,7,11],also:[1,7,8,11,12,13,23],alter:[10,28],ammount:[13,14],amount:[2,11],amt:[1,6,7,11],amt_id:[1,11],amt_loeschen:[],anfang:[6,11],anfordern:[6,11],angab:[7,11],angefordert:[3,6,11],angeforderten:[3,6,11],angegeben:[3,11],angegebenen:[3,11],angelegt:[3,11],angemeldet:[3,6,7,11],angezeigt:[3,6,11],angezeigten:[3,6,11],ani:[3,5,11],anklicken:[6,11],anschrift:[3,6,11],ansicht:[6,11],ansonsten:[6,11],anymor:[2,11],anzahl:[0,6,11],anzeig:[6,11],anzeigen:[6,11],anzeigt:[6,11],anzuzeigen:[6,11],apach:[8,12],apache2:10,apache2ctl:[8,12],apache_2:[8,12],app:[1,3,5,7,11],appear:[13,23,24],append:[7,8,11,12],appli:[9,12],applic:[8,9,12,13,14,16,19,20,21,22,23,24,25,26,28,30,31],applik:[6,11],appropri:[5,11],apt:[8,12],arg:[0,1,2,11],asgi:[7,11],assign:[1,11],associ:[1,2,11,13,20],attr:[],attribut:[6,11],attributen:[6,11],auch:[3,6,11],auf:[3,6,11],aufgab:[1,11,13,19],aufgabe_id:[1,11],aufgaben:[1,3,6,11],aufgaberecht:[1,11],aufgerufen:[3,11],aufgeteilt:[3,11],aufruf:[3,6,11],aufruft:[3,11],aufzeichnen:[3,11],auhent:[1,11],aus:[3,6,11],ausgang:[7,11],ausnahmebehandlung:[],auswahl:[6,11],auth:[3,11],authent:[1,5,11],authenticationform:[5,11],auto:[2,11],autom:[2,11],automat:[5,11],automatisch:[3,11],avail:[8,12],back:[2,11],base:[8,12],base_dir:[8,12],bash:[8,12],basic:[4,9,10,11],bearbeiten:[3,6,11,13,14,17,18,22,25,26,28,31],bearbeitet:[6,11],bearbeitung:[6,11],becaus:[8,12],been:[1,2,11,13,20,28],befindet:[7,11],befor:[0,1,7,9,11,12],beforehand:[1,11],befugt:[6,11],bei:[3,6,11],beim:[3,6,11],being:[1,11],beispiel:[3,11],belong:[1,11,14,17,20,23,25,28,31],below:[0,1,11],benutz:[13,26],bereich:[6,11],bereiche_laden:[6,11],bereichen:[6,11],bereit:[3,6,11],bereitgestellt:[3,11],bereitstellung:[3,6,11],beschreibt:[3,11],beschrieben:[3,11],bestehend:[6,11],bestehenden:[3,11],bestimmten:[6,11],betroffenen:[3,11],bezeichnung:[0,1,11],big:[13,20],bin:[2,7,8,11,12,13,30],bis:[6,11],blackboxtest:[7,11],bottom:[8,12],browser:[7,11],built:[0,1,11],button:[1,6,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31],bzw:[3,6,11],call:[2,7,11],can:[1,2,4,5,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31],card:[1,11],cascad:[1,11],chang:[0,1,2,4,7,8,9,11,12,13,14,15,17,18,22,25,28],chapter:[8,12],charact:[1,11],charfield:[0,1,11],check:[1,7,8,11,12,13,14,17,18,19,22,28,29,30,31],checkbox:[1,6,11,13,18,20,30],checklist:[1,10,11],checklist_id:[1,11],checkliste_id:[1,11],checklisteaufgab:[1,11],checklisteaufgabe_set:[1,11],checklisten:[7,10,20],checklisterecht:[1,11],checklisterecht_set:[0,1,11],checkllisterecht:[1,11],child:[0,1,11],children:[0,1,11],chmod:[8,12],choos:[13,17,20,25],chown:[8,12],clean_duplicate_histori:10,clear:[4,11],click:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31],clone:[8,10],close:[7,8,11,12],code:[1,10],collectstat:[8,12],com:[8,9,12],command:[7,8,9,10,12,13,30],comment:[1,11],commun:[8,12],complet:[1,11],complex:[7,11],compon:[5,11],concern:[2,11],condit:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],conf:[8,12],config:[8,12],configtest:[8,12],configur:10,confirm:[1,11,13,16,30],consist:[1,11],construct:[7,11],contain:[1,4,5,7,8,9,11,12],content:[7,10,11],context:[1,11],contrib:[3,11],correct:[1,7,8,11,12,13,16,24,30],correctli:[1,7,11],correspond:[13,16],could:[1,11],cover:[7,11],coverag:10,creat:[0,1,2,7,8,9,10,11,12,15],create_forward_many_to_many_manag:[0,1,11],createamt:[7,11],createreferat:[7,11],createsuperus:[8,9,12],createunterbereich:[7,11],cronjob:[2,11],csv:10,current:[1,11],dabei:[3,6,11],dahingehend:[3,11],dai:[2,11],damit:[3,11],das:[3,6,7,11],dass:[7,11],data:[5,7,8,10,12,13,15,23],databas:[2,4,8,9,11,12],daten:[3,6,11],datenbank:[6,11],datenbankmodel:[0,11],datensatz:[3,11],datetim:[3,11],datetimefield:[0,1,11],deactiv:[8,12],deal:[9,12],deamon:[8,12],decod:[6,11],defer:[0,1,11],defin:[0,1,5,8,11,12],dekrementiert:[6,11],deleg:[0,1,11],delet:[1,2,7,10,11],delete_old_histori:10,delimit:[4,11],dem:[3,7,11],den:[3,6,11],denen:[3,6,11],depend:[1,8,10,12],deploi:[8,12],deploy:10,der:[0,3,6,7,11],deren:[6,11],derzeitigen:[6,11],des:[3,6,7,11],descript:[7,11],deselect:[13,20],desiredinfo:[3,11],dessen:[6,11],determin:[1,11],dev:[7,11],develop:10,dialog:[13,27,29],die:[3,6,7,11],dient:[6,11],dies:[3,6,11],dieser:[3,6,11],differ:[13,22],digitalocean:[8,12],directli:[1,11],directori:[4,8,9,11,12],disabl:[1,11],displai:[0,1,5,7,11],distro:[8,12],django:[0,1,2,5,6,7,10],djangoproject:[8,12],doc:[7,8,11,12],document:7,doe:[2,11],doesnotexist:[0,1,11],doing:[0,1,11],dokument:[3,6,11],domain:[8,12],don:[13,14,17],done:[8,9,12],drei:[3,11],dropdown:[1,6,11],dropwdown:[6,11],duplic:[2,11],durch:[3,11],durchsucht:[3,11],dynam:[0,1,11],each:[1,11,13,23],ebenfal:[3,11],edit:[8,12],eigentlich:[3,11],ein:[3,6,7,11],einem:[3,6,11],einen:[3,6,11],einer:[3,6,11],einfach:[3,11],eingab:[6,11],eingabebereich:[6,11],eingaben:[6,11],eingesehen:[3,11],einmal:[3,11],einsehen:[6,11],eintrag:[3,11],element:[1,3,11],email_html_laden:[6,11],email_loeschen:[6,11],empti:[1,11],enabl:[8,12],end:[8,12],ennviron:[8,12],ensur:[13,31],entfernen:[6,11,13,29],entfernt:[6,11],enthalten:[3,6,11],entnehmen:[],entnimmt:[],entnommen:[6,11],entri:[1,2,11],entsprechend:[3,11],entsprechenden:[3,11],entwed:[3,11],environ:[8,12],equival:[2,11],erfassen:[6,11],erfolgreich:[6,11,13,16,24,30],ergebni:[3,11],erhalten:[7,11],ermittelt:[3,11],error:[1,5,11],erst:[3,11],erstellen:[1,3,6,7,11,13,20],erstellung:[3,11],erstmalig:[3,11],etc:[8,12],even:[2,11],everi:[7,11],everyth:[1,7,8,11,12,13,16,24,25,30],exampl:[0,1,2,8,11,12,13,23],except:[0,1,11],execut:[0,1,4,11],exist:[1,2,11],existierenden:[6,11],existiert:[],explicitli:[1,11],extrahieren:[6,11],fall:[3,11],fals:[0,1,2,11],fehlenden:[6,11],fehlerhaften:[6,11],felder:[0,3,6,11],fetch:[1,11],fetch_entri:[3,11],few:[13,29],field:[0,1,11],file:[4,8,11,12],fill:[13,23,24,26],filterung:[3,11],find:[1,11],finden:[0,3,6,11],finish:[13,16,24],fire:10,firewal:[8,12],first:[0,1,4,8,9,11,12,14,16,18,19,21,22,23,24,26,28,30,31],firstnam:[7,11],flag:[2,11],folder:[7,8,11,12],folgend:[3,6,11],folgenden:[3,11],follow:[4,7,9,11,12,13,16,22],folow:[8,12],forc:[1,11],force_color:[2,11],foreignkei:[0,1,11],forget:[13,14,17],form:[5,11,13,16,23,24,26],formular:[6,11],forward:[0,1,11],forwardmanytoonedescriptor:[0,1,11],forwardonetoonedescriptor:[0,1,11],found:[1,5,11,13,14,28],framework:[7,11],from:[0,1,2,5,7,8,9,11,12,13,28,31],front:[8,12],full:[8,12],funktion:[0,1,3,4,6,7,11,13,21,22],funktion_id:[0,11],funktion_loeschen:[6,11],funktion_set:[0,11],funktionen:[0,1,10,11],funktionen_html_laden:[6,11],funktionen_laden:[6,11],funktionen_max_member_ueberpruefen:[6,11],funktionen_ohne_unterbereich_count:[0,11],funktioniert:[3,11],funktionrecht:[0,11],funktionrecht_set:[0,11],funktionselect:[1,11],furthermor:[1,11],garbag:[13,27],gecko:[7,11],geckodriv:[7,11],gefilterten:[3,11],gefunden:[3,6,11],gefundenen:[3,11],gegebenen:[3,11],geholt:[3,11],gelesen:[6,11],geliefert:[3,11],genau:[6,11],gener:[1,7,10,11,20,21],generaltaskscheckbox:[1,11],generiert:[3,11],gerendert:[3,6,11],gesamten:[3,11],gespeichert:[3,6,11],get:[0,1,2,5,8,11,12,13,16,19,21,22,24,25,26,30,31],get_associated_data:[3,7,11],get_default_history_us:[0,1,11],get_funktionen:[1,11],get_history_type_displai:[0,1,11],get_next_by_history_d:[0,1,11],get_perm:[1,11],get_previous_by_history_d:[0,1,11],get_task:[1,11],get_us:[0,1,11],getvalu:[],ggf:[3,11],gibt:[3,11],git:[8,10],github:[8,9,12],give:[13,18,25,26],given:[1,11],goe:[1,11],goodby:[5,11],got:[8,12],grant:[1,8,11,12],group:[8,12],grundaufbau:[3,11],gui:[7,11],guidanc:[8,12],handelt:[6,11],handl:[2,11],has:[1,11],hat:[3,6,11],have:[1,2,4,8,11,12,13,16,18,19,20,21,22,23,24,25,26,28,30],head:[4,11],header:[1,11],help:[2,11],helper:10,herau:[3,11],here:[7,8,11,12],hier:[3,6,11],histor:[0,1,3,11],histori:[0,1,2,7,10],historicalaufgab:[1,11],historicalchecklist:[1,11],historicalchecklisteaufgab:[1,11],historicalchecklisterecht:[1,11],historicalfunkt:[0,11],historicalfunktionrecht:[0,11],historicalorganisationseinheit:[0,11],historicalrecht:[0,11],historicalunterbereich:[0,11],historien:[3,11],history_change_reason:[0,1,11],history_d:[0,1,11],history_id:[0,1,11],history_object:[0,1,11],history_typ:[0,1,11],history_us:[0,1,11],history_user_id:[0,1,11],historymanag:[0,1,11],holt:[6,11],home:[8,12],host:[8,12],how:[8,10,12],howto:[8,12],html:[8,12],http:[1,3,5,6,8,9,11,12],httprespons:[1,11],ich:[13,30],identifi:[1,11],implement:[0,1,11],importaemt:[4,11],importscrip:[4,11],importscript:[7,10],improv:[1,11],includ:[1,2,11],indem:[6,11],indic:[1,11],indicitang:[1,11],inform:[1,7,11,13,26],inhalt:[3,11],inherit:[7,11],initi:[6,8,11,12],inkludiert:[3,6,11],inkrementiert:[6,11],input:[13,26],insid:[1,11],instal:[3,6,7,8,10,11],instanc:[0,1,7,11],instance_typ:[0,1,11],instanz:[3,11],instanzen:[6,11],integrierten:[3,11],interfac:[7,11],introduct:10,invalid:[5,11],ip_or_domain:[8,12],is_next:[0,1,11],issu:10,ist:[3,6,7,11],its:[1,11],itself:[1,11],javascript:[1,11],jede:[3,11],jedem:[6,11],jeden:[3,11],jetzigen:[3,11],jeweil:[3,6,11],jeweiligen:[6,11],join:[8,12],json:[6,11],just:[13,15],kandidaturzeitraum:[6,11],kann:[0,3,6,11],keep:[1,8,11,12],kein:[3,11],klass:[3,11],know:[0,1,11,13,14,28],knowledg:[8,12],kontext:[6,11],kopi:[6,11],kopien:[6,11],kwarg:[0,1,11],label:[13,20],last:[0,1,8,9,11,12,13,19,24,28,31],lastnam:[7,11],latest:[1,3,6,10],leap:[2,11],least:[1,2,8,11,12],leav:[13,29],leerer:[],left:[13,27],legisl:[13,23],lesbar:[3,11],libapache2:[8,12],like:[8,12,13,15,21,22],line:[4,8,11,12],link:[3,7,11,13,21],list:1,listenzeil:[3,11],load:[0,1,11],loeschen:[1,11],log:[1,5,11],login:[1,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],loginaslukasadmin:[7,11],loginaslukasus:[7,11],logout:[5,11],logout_request:[5,11],look:[8,12],loop:[7,11],lower:[13,24,27],made:[1,2,5,11,13,28,29],mai:[1,11],mail:[3,6,11,13,23],main:[1,4,11],main_screen:[5,6],make:[0,1,11],makemigr:[8,9,12],manag:[0,1,2,7,8,9,11,12,13,16,20,23,24,30],mani:[0,1,11],manual:[0,1,11],markiert:[6,11],materi:[5,11],max_memb:[0,4,11],maximal:[0,11],maximum:[13,14,22],mehrer:[6,11],mehreren:[6,11],member:[1,7,10,11,14,20,22],messag:[1,5,11,13,14,17,19,22,25,28,31],method:[0,1,11],methodnam:[7,11],migliedern:[6,11],migrat:[7,8,9,11,12],mindesten:[6,11],minut:[2,11],miss:[7,11],mistak:[13,29],mit:[3,6,11],mitarbeit:[13,18],mitgegeben:[3,11],mitgli:[1,2,3,6,11],mitglied:[1,2,3,5,10],mitglied_id:[1,6,11],mitglied_laden:[6,11],mitgliedamt:[2,11],mitgliedamt_set:[0,11],mitgliedbearbeitenview:[6,11],mitglieder_loeschen:[6,11],mitgliederanischt:[6,11],mitgliederansicht:[6,11],mitgliederdaten:[6,11],mitgliederdatenbank:[8,9,12,13,23],mitgliedererstellung:[6,11],mitgliedern:[0,3,6,11],mitgliederstellenview:[6,11],mitgliedmail:[2,3,11],mitgliedselect:[1,11],mitgliedsnamen:[6,11],mitli:[6,11],mitsamt:[3,11],mittel:[3,11],mkdir:[8,12],mod:[8,12],mod_wsgi:[8,12],modal:[1,3],mode:[8,12],model:[3,7,10],modif:[13,14,16,17,28,31],modifi:[13,15,16,17],modul:10,more:[1,11,13,26],most:[0,1,11],move:[13,16,19,21,24,30],mozilla:[7,11],mribrgr:[8,9,12],multipl:[7,11,13,23],multipleobjectsreturn:[0,1,11],must:[1,9,11,12],myfuncaemt:[7,11],myfunclogin:[7,11],myfuncmitglied:[7,11],myproject:[],mystat:[8,12],mytestcas:10,nach:[3,6,11],nachdem:[3,6,11],nachnam:[3,6,7,11],nachnamen:[6,11],name:[1,3,6,7,8,11,12,13,14,17,19,22,25],namen:[3,6,7,11],nano:[8,12],navig:[5,7,11,13,14,17,18,21,22,23,25,28,31],neben:[6,11],need:[1,4,7,8,9,11,12,13,14,18,21,24,25,27,28,30],neue:[3,6,7,11],neuen:[6,11],next:[0,1,9,11,12],next_record:[0,1,11],nicht:[6,11],no_color:[2,11],none:[0,1,2,11],note:[1,2,11],now:[8,9,12,13,14,15,16,17,19,21,22,23,24,25,26,28,29,30,31],number:[13,30],nummer:[6,11],nur:[3,6,11],nutzer:[3,6,11],object:[0,1,3,11],objekt:[3,11],occur:[1,11],oder:[3,6,11],old:[2,11],older:[2,11],omit:[7,11],one:[0,1,11],onli:[1,7,11,13,20],open:[7,8,11,12],oper:[1,11],option:[1,2,3,6,7,9,11,12,20,22],order:[1,11],organis:[13,16,24],organisationseinheit:[0,3,4,7,11,13,16,24,30],organisationseinheit_id:[0,11],organisationseinheiten:[10,30],organiz:[10,14,17,28,31],other:[1,7,11],otherwis:[1,2,5,11],our:[8,12,13,16,24,25,30],out:[5,11],output:[8,12],over:[7,11],overview:[13,26],owner:[8,12],ownership:[8,12],page:[1,5,11,13,26],pagin:[3,7,11],panel:[13,20],param:[7,11],paramet:[1,3,4,5,6,7,11],parent:[0,1,11],pass:[8,12],passen:[6,11],passend:[3,11],passenden:[3,11],passiv:[7,11],path:[8,12],pen:[13,15],perform:[1,11],period:[13,23],permiss:[1,10,11],person:[8,12,13,23,26],pip3:[8,12],pip:[3,6,7,8,9,11,12],pleas:[1,2,11],popul:[1,11],posit:[7,11],post:[6,11],pre:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],present:[8,12],prev_record:[0,1,11],prevent:[1,11],previou:[0,1,8,11,12],prevmitgliedamt_set:[],primarykei:[3,11],privileg:[13,18],process:[5,8,11,12],project:10,prompt:[8,12,13,16,24,25,29,30],properti:[0,1,11],provid:[1,5,11],pull:[9,12],py3:[8,12],python3:[4,8,9,11,12],python:[2,8,9,11,12],queri:[0,1,11],queryset:[1,3,11],querytyp:[3,11],raspberri:[8,12],reach:[7,11],read:[0,1,8,11,12],readthedoc:[3,6,11],recht:[0,1,3,11,13,21],recht_id:[0,1,11],recommend:[8,12],record:[0,1,11],redirect:[1,5,11,13,23],refer:[1,6,7,11],referat:[6,7,11],referateunterbereicheaemt:[4,11],referenc:[1,2,11],referenziert:[0,11],regist:[8,12],relat:[0,1,11],related_nam:[0,1,11],remov:[2,11],render:[1,3,5,11],rendern:[3,6,11],rendert:[6,11],replac:[8,12],report:10,repositori:[8,10],repres:[1,11],request:[0,1,3,5,6,11],respons:[1,5,6,11],restart:[8,12],restlichen:[6,11],revers:[0,1,11],reversemanytoonedescriptor:[0,1,11],revert_url:[0,1,11],rid:[2,11],right:[10,15,20,24,26],root:[5,11],rot:[6,11],row:[13,15],run:[2,7,11],runserv:[9,12],runtest:[7,11],same:[1,11,13,22],samt:[3,11],save:[0,1,8,11,12,13,14,15,17,18,19,21,22,23,24,25,28,31],save_without_historical_record:[0,1,11],screen:[0,11],script:[4,11],search:[2,11],section:[1,7,8,9,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,28,30,31],see:[13,23,26,28],sein:[0,11],seit:[3,11],seiten:[3,11],seitenzahl:[3,11],select:[1,11,13,20,21,30],self:[7,11],semi:[3,11],seper:[8,12],serv:[8,12],server:[1,8,9,11,12],servic:[8,12],set:[1,2,7,10,11,13,22],setup:[7,8,11,12],shall:[1,11],should:[8,12,13,23],shown:[1,5,11],sich:[6,7,11],sicher:[13,30],sichern:[13,14,16,17,18,19,21,22,24,25,26,28,31],sicht:[7,11],side:[0,1,11],sie:[6,11],simpl:[1,2],simple_histori:[0,1,11],simpli:[13,15,18,21],sinc:[1,11],sind:[0,3,6,11],site:[0,1,7,8,11,12],softwar:[8,12,13,26],soll:[3,6,7,11],sollen:[3,6,11],solv:10,some:[4,10,11,13,26],someth:[8,12],sortiert:[6,11],sourc:[1,10],sowi:[3,6,11],sowohl:[3,11],specif:[1,9,11,12],specifi:[0,1,2,7,8,11,12],speichern:[6,11,13,15,23],speichert:[6,11],spitznam:[6,7,11],sqlite3:[4,8,9,11,12],stammdaten:[3,11],start:[9,12,13,25],state:[1,11],static_root:[8,12],statu:[13,18],stderr:[2,11],stdout:[2,11],steht:[6,11],stellt:[3,6,11],step:[7,8,9,11,12,13,16,19,21,22,24,25,26,29,30,31],stet:[3,11],stmt:[7,11],store:[7,11],str:[3,11],string:[7,11],structur:[4,11],stura:[1,6,8,9,11,12,13,23,29],subclass:[0,1,11],submit:[5,11],subsect:[10,14,21,24,28],substr:[6,11],succed:[13,16,25],succeed:[13,24,30],success:[1,11,13,14,17,19,22,25,28,29,31],successfulli:[5,8,9,11,12,13,18,28,29,31],sucess:[5,11],suchanfrag:[3,11],suchbegriff:[3,6,11],suchbegriffen:[3,11],sucheingab:[6,11],suchen:[6,11],sudo:[8,12],superus:[1,9,11,12],suppli:[5,11],sure:[0,1,11],sut:[7,11],syntax:[8,12],system:[3,7,8,11,12],systemctl:[8,12],systemnutz:[3,11],systemtest:[7,11],t_checklisten:[1,11],t_histori:[3,11],tabel:[6,11],tabellenzeil:[6,11],tabl:[4,7,11,13,23],tag:[8,10,12],task:[1,10,11,20,21],task_id:[1,11],task_typ:[1,11],teardown:[7,11],telefonnumm:[6,11],templat:10,templatetag:[1,3,7,11],tese:[4,11],test:[4,10],test_001_admin:[7,11],test_002_us:[7,11],test_003_multius:[7,11],test_004_mitgliedhinzufuegen:[7,11],test_005_mitgliedentfernen:[7,11],test_006_mitgliedaendern:[7,11],test_007_aemthinzufuegen:[7,11],test_008_aemtentfernen:[7,11],test_009_aemtaendern:[7,11],test_1aemtentfernen_assuperus:[7,11],test_1amtbezeichnungaendern:[7,11],test_1amtreferataendern:[7,11],test_1amtworkloadaendern:[7,11],test_1funktionhinzufuegen_assuperus:[7,11],test_1mitgliedaendern_assuperus:[7,11],test_1mitgliedentfernen_assuperus:[7,11],test_1organisationseinheitbezeichnungaendern:[7,11],test_1organisationseinheithinzufuegen_assuperus:[7,11],test_1referatentfernen_assuperus:[7,11],test_1unterbereichbezeichnungaendern:[7,11],test_1unterbereichentfernen_assuperus:[7,11],test_1unterbereichhinzufuegen_assuperus:[7,11],test_1unterbereichreferataendern:[7,11],test_app:[7,11],test_login_superus:[7,11],test_login_us:[7,11],test_model:[7,11],test_referatunterbereichamthinzufuegen_assuperus:[7,11],test_url:[7,11],test_view:[7,11],testadmin:[7,11],testaemtaendern:[7,11],testaemtentfernen:[7,11],testaemthinzufuegen:[7,11],testluka:[7,11],testlukasadmin:[7,11],testmitgliedaendern:[7,11],testmitgliedentfernen:[7,11],testmitgliedhinzufuegen:[7,11],testus:[7,11],textfeld:[6,11],textfeldern:[6,11],textio:[4,11],than:[2,8,11,12],thei:[1,5,11],them:[1,11],thi:[0,1,2,4,5,7,8,9,11,12,13,24,30],though:[2,11],three:[1,11],through:[1,11,13,14,20,28],thu:[2,11],time:[0,1,11],timestamp:[3,11],titel:[3,11],titl:[1,11],to_class_nam:[3,7,11],todo:[7,11],topic:[9,12],tostr:[0,11],total:[7,11],track:[1,11],tri:[1,5,11],trigger:[1,5,11],tutori:[8,12],txt:[8,9,12],type:[1,3,7,9,11,12],ubuntu:[8,12],ubuntuus:[8,12],ufw:[8,12],umgeleitet:[6,11],uncheck:[1,11],und:[3,4,6,7,11,13,14,17,18,22,25,26,28,31],under:[1,5,7,11],unit:[10,14,17,28,31],unter:[0,3,6,11],unterbereich:[0,3,4,7,10,11,25],unterbereich_id:[0,11],unterbereich_set:[0,11],untersucht:[3,11],unterteilt:[3,6,11],unterteilung:[3,11],updat:[8,12],upgrad:[8,12,13,18],upper:[13,26],url:[0,1,5,7,11],use:[0,1,2,8,9,10,12],used:[1,2,4,9,11,12],user:[0,1,3,5,7,8,10,11,12,23],usernam:[7,8,11,12],using:[2,5,9,11,12],valu:[0,1,3,4,7,11],variabl:[5,11],venv:[8,12],verwaltung:[6,11],verwendet:[3,11],via:[0,1,5,11],view:[7,10,13,20,23],virtual:[8,12],virtualenv:[8,12],virtualenviro:[9,12],virtualhost:[8,12],visibl:[1,11],vom:[6,11],von:[3,6,11],vor:[3,6,11],vorgang:[6,11],vorhanden:[3,11],vorhandenen:[6,11],vorher:[3,11],vorkommen:[3,11],vornam:[3,6,7,11],want:[7,8,11,12,13,16,17,18,21,22,26,28,29,30,31],warn:[4,11],web:[8,12],webbrows:[9,12],webserv:10,wechseln:[6,11],weiter:[3,6,11,13,14,17,18,22,25,26,28,31],weiterleitung:[6,11],welch:[3,6,11],welchem:[3,11],welchen:[3,11],welcher:[3,11],welcom:[1,5,11],well:[1,11],wenn:[3,6,11],werden:[3,6,7,11],wert:[3,11],what:[0,1,8,11,12],when:[0,1,2,11],whether:[1,11],which:[1,11,13,14,20,28],who:[5,11],wichtigsten:[3,11],wie:[3,7,11],wiki:[8,12],wird:[3,6,11],without:[0,1,11],work:[7,10,11],workload:[0,7,11,13,14,22],would:[13,15],wrapper:[0,1,11],write:[8,12],wsgi:[7,8,11,12],wsgidaemonprocess:[8,12],wsgiprocessgroup:[8,12],wsgiscriptalia:[8,12],wurd:[3,6,11,13,16,24],wurden:[3,6,11],www:[7,8,11,12],year:[2,11],you:[0,1,2,4,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],your:[4,8,11,12,13,14,15,16,17,18,22,23,24,26],zeichnet:[3,11],zeigt:[6,11],zeil:[3,6,11],zeitpunkt:[3,11],zeitstempel:[3,11],zugeordnet:[7,11],zugriff:[3,6,11],zum:[3,6,11],zuordnung:[13,21],zur:[3,6,11],zusammengebaut:[3,11],zusammengefasst:[3,11],zustand:[3,11]},titles:["\u00c4mter","Checklisten","Commands","Historie","Importscripts","Login","Mitglieder","Tests","Deployment","Introduction Development","Welcome to StuRa - Mitgliederdatenbank\u2019s documentation!","Code Documentation","Developer Documentation","User Documentation","Alter a Function","Alter a Member","Alter an Organizational unit","Alter a Subsection","Create a User (with Admin rights)","Create a new General Task","Create a new Checklist","Create Right for a Function","Add a new Function","Create a Member","Add a new Organizational unit","Create a new Subsection","Create an User","Delete a Checklist","Delete a Function","Delete a Member","Delete an Organizational unit","Delete a Subsection"],titleterms:{"001":[7,11],"002":[7,11],"003":[7,11],"004":[7,11],"005":[7,11],"006":[7,11],"007":[7,11],"008":[7,11],"009":[7,11],"\u00e4mter":[0,11],"abh\u00e4ngigkeiten":[3,6,11],"function":[4,7,11,13,14,21,22,28],"new":[13,19,20,22,24,25],_createmod:[1,11],_deletemod:[1,11],_funktionselectopt:[1,11],_modaldatainclud:[3,11],_noresultsrow:[3,11],_pagin:[3,11],_titlebuild:[3,11],add:[13,22,24],adjust:[8,12],admin:[13,18],aemter:[6,7,11],alter:[13,14,15,16,17],amt_dropdown_list_opt:[6,11],apache2:[8,12],basic:[8,12],belong:[13,22],bereich_dropdown_list_opt:[6,11],checklist:[13,20,27],checklisten:[1,11,13],clean_duplicate_histori:[2,11],clone:[9,12],code:11,command:[2,11],configur:[8,12],coverag:[7,11],creat:[13,18,19,20,21,22,23,25,26],csv:[4,11],data:[4,11],delet:[13,27,28,29,30,31],delete_old_histori:[2,11],department_row:[0,11],depend:[7,11],deploy:[8,12],develop:[9,12],directli:[13,22],django:[3,8,11,12],document:[10,11,12,13],email:[6,11],email_input:[6,11],fire:[9,12],firefox:[7,11],first:[13,25],funktionen:13,gener:[13,19],git:[9,12],helper:[7,11],histori:[3,11],how:[4,11],html:[0,1,3,5,6,11],importscript:[4,11],instal:[9,12],introduct:[9,12],issu:[8,12],latest:[7,11],list:[3,11],login:[5,7,11],main_screen:[0,1,11],member:[13,15,23,29],mitglied:[6,7,11,13],mitglied_erstellen_bearbeiten:[6,11],mitgliederdatenbank:10,modal:[6,11],modaldata:[3,11],model:[0,1,11],modul:[7,11],mytestcas:[7,11],option:[13,25],organisationseinheiten:13,organiz:[13,16,22,24,25,30],permiss:[8,12],project:[8,12],report:[7,11],repositori:[9,12],requir:[8,9,10,12],right:[13,18,21],row:[3,6,11],rowcont:[3,11],second:[13,25],selenium:[7,11],set:[8,12],simpl:[3,11],simplejson:[6,11],solv:[8,12],some:[8,12],sourc:[7,8,11,12],stura:10,subsect:[13,17,22,25,31],tab:[3,11],tag:[1,3,11],task:[13,19],templat:[0,1,3,5,6,11],test:[7,11],testcas:[7,11],unit:[13,16,22,24,25,30],unterbereich:13,use:[4,11],user:[13,18,26],via:[13,25],view:[0,1,3,5,6,11],webdriv:[7,11],webserv:[9,12],welcom:10,work:13}})