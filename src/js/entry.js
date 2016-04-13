import './../less/styles.less';

import MainCtrl from './controllers/main';
import MarkdownFilter from './filters/markdown';
import HotReplaceDirective from './directives/hotReplace';

var app = angular.module('app', ['ngSanitize']);

app.controller('MainCtrl', MainCtrl);
app.filter('markdown', MarkdownFilter);
app.directive('hotReplace', HotReplaceDirective.factory());
