import { Injectable } from "@angular/core";

export interface ChildrenItems {
    state: string;
    false?: boolean;
    name: string;
    type?: string;
    children?: ChildrenItems[];
  }
  
  export interface MainMenuItems {
    state: any;
    true:boolean
    num:any
    short_label?: string;
    main_state?: string;
    false?: boolean;
    name: any;
    type: string;
    icon: string;
    children?: ChildrenItems[];
  }
  
  export interface Menu {
    label: string;
    main: MainMenuItems[];
  }

  const MENUITEMS = [
    //*******************Pilotage */
    {
      label: '',
      main: [
       
  
        //Dashboard
        {
          state: 'Tableau de bord',
          true:true,
          false:false,
          num:1,
          short_label: 'Dashboard',
          name: 'Tableau de bord',
          type: 'link',
          icon: 'dashboard',
          // children: [
          //   {
          //     state: 'Default',
          //     name: 'Default',
          //   },
          //   {
          //     state: 'Analytics',
          //     name: 'Analytics',
          //   },
          //   {
          //     state: 'SaaS',
          //     name: 'SaaS',
          //   }   
          // ],
        },
       /* //Froms
        {
            state: 'Parent',
            true:true,
            false:false,
            num:2,
            short_label: 'Parent 1',
            name: 'Forms',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [

        
              {
                state: 'TypeAppels/add',
                name: 'TypeAppels',
              },
        
              {
                state: 'Questionnaires/add',
                name: 'Questionnaires',
              },
        
              {
                state: 'Missions/add',
                name: 'Missions',
              },
        
              {
                state: 'Teleoperateurs__Missions/add',
                name: 'Teleoperateurs__Missions',
              },
        
              {
                state: 'Abonnements/add',
                name: 'Abonnements',
              },
        
              {
                state: 'Contrats/add',
                name: 'Contrats',
              },
        
              {
                state: 'Agendas/add',
                name: 'Agendas',
              },
        
              {
                state: 'Etats__Appel/add',
                name: 'Etats__Appel',
              },
        
              {
                state: 'Banques/add',
                name: 'Banques',
              },
        
              {
                state: 'Moyens__Paiement/add',
                name: 'Moyens__Paiement',
              },
        
              {
                state: 'Societes/add',
                name: 'Societes',
              },
        
              {
                state: 'Criteres/add',
                name: 'Criteres',
              },
        
              {
                state: 'TypeMissions/add',
                name: 'TypeMissions',
              },
        
              {
                state: 'Agendas__Teleoperateurs/add',
                name: 'Agendas__Teleoperateurs',
              },
        
              {
                state: 'Options/add',
                name: 'Options',
              },
        
              {
                state: 'Modeles/add',
                name: 'Modeles',
              },
        
              {
                state: 'Questions/add',
                name: 'Questions',
              },
        
              {
                state: 'TrunkSIP/add',
                name: 'TrunkSIP',
              },
        
              {
                state: 'Etats__Validation/add',
                name: 'Etats__Validation',
              },
        
              {
                state: 'TypeProspects/add',
                name: 'TypeProspects',
              },
        
              {
                state: 'Avis/add',
                name: 'Avis',
              },
        
              {
                state: 'SecteurActivites/add',
                name: 'SecteurActivites',
              },
        
              {
                state: 'Teleoperateurs/add',
                name: 'Teleoperateurs',
              },
        
              {
                state: 'Tickets/add',
                name: 'Tickets',
              },
        
              {
                state: 'Boite__Envoie/add',
                name: 'Boite__Envoie',
              },
        
              {
                state: 'Reponses/add',
                name: 'Reponses',
              },
            ],
          },*/

        //Projects
        {
          state: '',
          true:true,
          false:false,
          num:3,
          short_label: 'Pages/Missions',
          name: 'Missions',
          type: 'link',
          icon: 'flip_to_back',
        },
        //Projects
        {
          state: '',
          true:true,
          false:false,
          num:4,
          short_label: 'Pages/Teleoperateurs',
          name: 'NeoProspecteur',
          type: 'link',
          icon: 'flip_to_back',
        },
        //Missions internes
        // {
        //     state: '',
        //     true:true,
        //     false:false,
        //     num:5,
        //     short_label: 'Parent 1',
        //     name: 'Missions internes',
        //     type: 'sub',
        //     icon: 'chrome_reader_mode',
        //     children: [

        //       {
        //         state: 'Missions/add',
        //         name: 'Créer une nouvelle mission',
        //       },
        //       {
        //         state: 'Modeles/List',
        //         name: 'Gestionnaire de modèles',
        //       },
        //       /*{
        //         state: '',
        //         name: 'Bibliothèque de documents',
        //       },*/
        //       {
        //         state: 'Agendas__Teleoperateurs/List',
        //         name: 'Gestion des agendas',
        //       },
        //       /*{
        //         state: '',
        //         name: 'Affectation et validation des missions',
        //       }, */
        //     ],
        //   },
        //Gestion de compte
        {
            state: '',
            true:true,
            false:false,
            num:6,
            short_label: 'Parent 1',
            name: 'Gestion de compte',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [

              {
                state: 'Pages/Profile',
                name: 'Mon compte',
              },
              /*{
                state: '',
                name: 'Voir mon profil public',
              },*/
           
              /*{
                state: '',
                name: 'Licence-logiciel',
              }, */
            ],
          },
        //Paramètres
        {
            state: '',
            true:true,
            false:false,
            num:7,
            short_label: 'Parent 1',
            name: 'Paramètres',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [

              // {
              //   state: 'Etats__Appel/List',
              //   name: 'Etats d’appels',
              // },
              // {
              //   state: 'Etats__Validation/List',
              //   name: 'Etats de validation',
              // },
              /*{
                state: '',
                name: 'Numéro sortant affiché',
              },*/
              // {
              //   state: 'Boite__Envoie/List',
              //   name: 'Boîtes d’envoi de mails',
              // },
              // {
              //   state: 'TrunkSIP/List',
              //   name: 'Trunk SIP',
              // }, 
              // {
              //   state: 'Abonnements/List',
              //   name: 'Mon abonnement',
              // },
              {
                state: 'Pages/Pricing',
                name: 'Pricing',
              },
              // {
              //   state: 'Pages/Subscriptions',
              //   name: 'Subscription 2',
              // },
              /*{
                state: '',
                name: 'Mon bilan',
              },
              {
                state: '',
                name: 'Mes gains / factures',
              },*/
              // {
              //   state: 'Contrats/List',
              //   name: 'Mes contrats',
              // },
              /*{
                state: '',
                name: 'Module d’aide',
              },
              {
                state: '',
                name: 'Test de connectivité',
              },*/
              // {
              //   state: 'Tickets/List',
              //   name: 'Assistance / tickets',
              // },
            ],
          },
        //Projects
        {
          state: '',
          true:true,
          false:false,
          num:8,
          short_label: 'login',
          name: 'Déconnexion',
          type: 'link',
          icon: 'flip_to_back',
        },
           
      ],
    },
  ]  

  @Injectable()
  export class MenuItems {
    getAll(): Menu[] {
      return MENUITEMS;
    }
  }
  