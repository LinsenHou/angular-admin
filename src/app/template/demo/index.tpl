<div class="app-header navbar">
<!-- navbar header -->
<div class="navbar-header bg-dark">
    <button class="pull-right visible-xs dk" data-toggle="class:show" data-target=".navbar-collapse">
        <i class="glyphicon glyphicon-cog"></i>
    </button>
    <button class="pull-right visible-xs" data-toggle="class:off-screen" data-target=".app-aside" ui-scroll="app">
        <i class="glyphicon glyphicon-align-justify"></i>
    </button>
    <!-- brand -->
    <a href="#/" class="navbar-brand text-lt">
        <i class="fa fa-btc"></i>
        <span class="hidden-folded m-l-xs">Angulr</span>
    </a>
    <!-- / brand -->
</div>
<!-- / navbar header -->

<!-- navbar collapse -->
<div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
<!-- buttons -->
<div class="nav navbar-nav hidden-xs">
    <a href="#" class="btn no-shadow navbar-btn" data-toggle="class:app-aside-folded" data-target=".app">
        <i class="fa fa-dedent fa-fw text"></i>
        <i class="fa fa-indent fa-fw text-active"></i>
    </a>
</div>
<!-- / buttons -->

<!-- link and dropdown -->
<ul class="nav navbar-nav hidden-sm">
    <li class="dropdown pos-stc">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle">
            <span>Mega</span>
            <span class="caret"></span>
        </a>
    </li>
</ul>
<!-- / link and dropdown -->

<!-- search form -->
<form class="navbar-form navbar-form-sm navbar-left shift" ui-shift="prependTo" data-target=".navbar-collapse" role="search">
    <div class="form-group">
        <div class="input-group">
            <input type="text" ng-model="selected" typeahead="state for state in states | filter:$viewValue | limitTo:8" class="form-control input-sm bg-light no-border rounded padder" placeholder="Search projects...">
              <span class="input-group-btn">
                <button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>
              </span>
        </div>
    </div>
</form>
<!-- / search form -->

<!-- nabar right -->
<ul class="nav navbar-nav navbar-right">
    <li class="dropdown">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle clear">
              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <i class="on md b-white bottom"></i>
              </span>
            <span class="hidden-sm hidden-md">John.Smith</span> <b class="caret"></b>
        </a>
    </li>
</ul>
<!-- / navbar right -->

</div>
<!-- buttons -->

</div>
<!-- / navbar collapse -->
</div>

<!-- nav -->
<div class="app-aside hidden-xs bg-dark">
    <div class="aside-wrap">
        <div class="navi-wrap">
            <nav class="navi">
                <div id="side-menu" ui-menu root-data="menuData"></div>
            </nav>
        </div>
    </div>
</div>
<!-- nav -->
