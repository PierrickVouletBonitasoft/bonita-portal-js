(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name o.b.f.admin.cases.list.values
   *
   * @description
   * set values to uses by the different case list components
   */

  angular.module('org.bonita.features.admin.cases.list.values', [])
    .value('casesColumns', [{
      name: 'ID',
      path: ['id'],
      selected: true
    }, {
      name: 'Process name',
      path: ['processDefinitionId', 'name'],
      selected: true
    }, {
      name: 'Synopsis',
      path: ['searchIndex1Value'],
      selected: true,
      defaultValue : 'No data'
    }, {
      name: 'Started by',
      path: ['started_by', 'userName'],
      selected: true,
      defaultValue : 'System'
    }, {
      name: 'Start date',
      path: ['start'],
      selected: true
    }, {
      name: 'Version',
      path: ['processDefinitionId', 'version'],
      selected: true
    }])
    .value('archivedCasesColumns', [{
      name: 'ID',
      path: ['sourceObjectId'],
      selected: true
    }, {
      name: 'Process name',
      path: ['processDefinitionId', 'name'],
      selected: true
    }, {
      name: 'Synopsis',
      path: ['searchIndex1Value'],
      selected: true,
      defaultValue : 'No data'
    }, {
      name: 'Started by',
      path: ['started_by', 'userName'],
      selected: true,
      defaultValue : 'System'
    }, {
      name: 'Start date',
      path: ['start'],
      selected: true
    }, {
      name: 'Version',
      path: ['processDefinitionId', 'version'],
      selected: true
    }])

    .value('moreDetailToken', 'casemoredetailsadmin')
    .value('archivedMoreDetailToken', 'archivedcasemoredetailsadmin')

    .value('defaultSort', 'id')
    .value('archivedDefaultSort', 'sourceObjectId')

    .value('defaultDeployedFields', ['processDefinitionId', 'started_by', 'startedBySubstitute'])
    .value('defaultCounterFields', [])
    .value('pageSizes', [25, 50, 100, 200])
    .value('defaultPageSize', 25)
    .value('defaultFilters', {
      appVersion: 'All',
      appName: 'All'
    });
})();
