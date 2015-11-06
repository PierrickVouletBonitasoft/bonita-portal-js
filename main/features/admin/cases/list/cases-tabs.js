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
          url: '/admin/cases/list?processId&supervisor_id&process_name&process_version&case_search',
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
            processName: ['$stateParams',
              function($stateParams){
                return $stateParams['process_name'];
              }
            ],
            processVersion: ['$stateParams',
              function($stateParams){
                return $stateParams['process_version'];
              }
            ],
            caseSearch: ['$stateParams',
              function($stateParams){
                return $stateParams['case_search'];
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
