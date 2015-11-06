/* jshint sub:true */
(function() {
  'use strict';

  angular.module('org.bonita.features.admin.cases.list', [
    'ui.router',
    'org.bonita.features.admin.cases.list.table',
    'ui.bootstrap',
    'gettext',
    'org.bonita.services.topurl',
    'org.bonita.features.admin.cases.list.values',
    'org.bonita.common.directives.bonitaHref'
  ])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.rule(function ($injector, $location) {
          if($location.path().indexOf('/pm')===0){
            return $location.url().replace(/^\/pm/, '/admin');
          }
        });
        $stateProvider.state('bonita.cases', {
          url: '/admin/cases/list?processId&supervisor_id&active_process_name&active_process_version&active_case_search&archived_process_name&archived_process_version&archived_case_search',
          templateUrl: 'features/admin/cases/list/cases.html',
          abstract: true,
          controller: 'CaseCtrl',
          controllerAs: 'caseCtrl'
        }).state('bonita.cases.all', {
          url: '',
          views: {
            'case-list': {
              templateUrl: 'features/admin/cases/list/cases-list.html',
              controller: 'ActiveCaseListCtrl',
              controllerAs : 'caseCtrl'
            },
            'archived-case-list': {
              templateUrl: 'features/admin/cases/list/archived-cases-list.html',
              controller: 'ArchivedCaseListCtrl',
              controllerAs : 'archivedCaseCtrl'
            }
          },
          resolve: {
            supervisorId: ['$stateParams',
              function($stateParams) {
                return $stateParams['supervisor_id'];
              }
            ],
            processId: ['$stateParams',
              function($stateParams){
                return $stateParams.processId;
              }
            ],
            activeProcessName: ['$stateParams',
              function($stateParams){
                return $stateParams['active_process_name'];
              }
            ],
            activeProcessVersion: ['$stateParams',
              function($stateParams){
                return $stateParams['active_process_version'];
              }
            ],
            activeCaseSearch: ['$stateParams',
              function($stateParams){
                return $stateParams['active_case_search'];
              }
            ],
            archivedProcessName: ['$stateParams',
              function($stateParams){
                return $stateParams['archived_process_name'];
              }
            ],
            archivedProcessVersion: ['$stateParams',
              function($stateParams){
                return $stateParams['archived_process_version'];
              }
            ],
            archivedCaseSearch: ['$stateParams',
              function($stateParams){
                return $stateParams['archived_case_search'];
              }
            ]
          }
        });
      }
    ])
    .controller('CaseCtrl', ['$scope', '$state', 'manageTopUrl',
      function($scope, $state, manageTopUrl) {
        //ui-sref-active seems to bug when the processId is passed
        //need to implement it ourselves...
        $scope.state = $state;
        $scope.currentToken = manageTopUrl.getCurrentPageToken();
      }
    ]);
})();
