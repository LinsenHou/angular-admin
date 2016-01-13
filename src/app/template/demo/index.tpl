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



<div class="app-content">
<div class="app-content-body fade-in-up">
<!-- COPY the content from "tpl/" -->

    <table class="table table-striped table-bordered table-hover dataTables-example dataTable dtr-inline" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
        <thead>
        <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style="width: 188px;">Rendering engine</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 255px;">Browser</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 231px;">Platform(s)</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending" style="width: 160px;">Engine version</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending" style="width: 114px;">CSS grade</th></tr>
        </thead>
        <tbody>

























































        <tr class="gradeA odd" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Firefox 1.0</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.7</td>
            <td class="center">A</td>
        </tr><tr class="gradeA even" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Firefox 1.5</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
        </tr><tr class="gradeA odd" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Firefox 2.0</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
        </tr><tr class="gradeA even" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Firefox 3.0</td>
            <td>Win 2k+ / OSX.3+</td>
            <td class="center">1.9</td>
            <td class="center">A</td>
        </tr><tr class="gradeA odd" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Camino 1.0</td>
            <td>OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
        </tr><tr class="gradeA even" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Camino 1.5</td>
            <td>OSX.3+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
        </tr><tr class="gradeA odd" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Netscape 7.2</td>
            <td>Win 95+ / Mac OS 8.6-9.2</td>
            <td class="center">1.7</td>
            <td class="center">A</td>
        </tr><tr class="gradeA even" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Netscape Browser 8</td>
            <td>Win 98SE+</td>
            <td class="center">1.7</td>
            <td class="center">A</td>
        </tr><tr class="gradeA odd" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Netscape Navigator 9</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
        </tr><tr class="gradeA even" role="row">
            <td class="sorting_1">Gecko</td>
            <td>Mozilla 1.0</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1</td>
            <td class="center">A</td>
        </tr></tbody>
        <tfoot>
        <tr><th rowspan="1" colspan="1">Rendering engine</th><th rowspan="1" colspan="1">Browser</th><th rowspan="1" colspan="1">Platform(s)</th><th rowspan="1" colspan="1">Engine version</th><th rowspan="1" colspan="1">CSS grade</th></tr>
        </tfoot>
    </table>

<!-- PASTE above -->
</div>
</div>