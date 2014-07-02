(function () {
    'use strict';

    angular.module('org.bonita.features.admin.tasks.list', ['ui.router'])
        .config(
        [ '$stateProvider', function ($stateProvider) {
            $stateProvider.state('adminTasks', {
                url: '/admin/tasks',
                templateUrl: 'features/admin/tasks/tasks-list.html',
                controller: 'tasksListCtrl'
            });
        }])
        .controller('tasksListCtrl', [function () {
        }])
        .directive('bbpmSwing', function () {
            return {
                restrict: 'A',
                transclude: true,
                template: '<div class="animated swing" ng-transclude></div>'
            };
        });
})();