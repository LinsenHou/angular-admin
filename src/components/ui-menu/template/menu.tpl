<ul class="nav">
	<li ng-repeat="node in uiMenuNodes" 
		ng-class="{active: node.isUnfold()}">
		<a ng-href="{{node.url}}" ng-click="!node.url && node.toggleUnfold()">
			<span class="nav-label font-bold">{{node.title}}</span>
            <i class="glyphicon glyphicon-stats icon text-primary-dker" ng-if="node.isParent()"></i>
			<span class="fa fa-fw fa-angle-right text" ng-if="node.isParent()"></span>
		</a>
		<div ui-menu ng-if="node.isParent()" children-data="node.getChildren()" ng-class="{in: node.isUnfold()}" class="collapse"></div>
	</li>
</ul>
