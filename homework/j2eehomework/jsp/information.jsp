<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="scheme" value="${pageContext.request.scheme}"/>
<c:set var="serverName" value="${pageContext.request.serverName}"/>
<c:set var="serverPort" value="${pageContext.request.serverPort}"/>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<c:set var="basePath" value="${scheme}://${serverName}:${serverPort}${contextPath}"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="${basePath}/css/main.css">
<link rel="stylesheet" type="text/css" href="${basePath}/css/workspace.css">
<link rel="stylesheet" type="text/css" href="${basePath}/css/tablelist.css">
</head>
<body>
<div class="container">
	<div class="tablemask" style="top: 5%;width: 100%;">
		<table class="table">
		            <tr class="thead">
		                <th>ID</th>
		                <th>房源标题</th>
		                <th>房型</th>
		                <th>面积</th>
		                <th>朝向</th>
		                <th>楼层</th>
		                <th>总楼层</th>
		                <th>建造年份</th>
		                <th>所属区域</th>
		                <th>产权</th>
		                <th>装修</th>
		                <th>状态</th>
		                <th>操作</th>
		            </tr>
		            <c:forEach var="house" items="${result.data}">
		            <tr class="tbody">
		                <td id="houseid${house.id}">${house.id}</td>
		                <td id="housetitle${house.id}">${house.housetitle}</td>
		                <td id="housesuite${house.id}">${house.suite}</td>
		                <td id="housearea${house.id}">${house.area}</td>
		                <td id="housetowards${house.id}">${house.towards}</td>
		                <td id="housefloor${house.id}">${house.floor}</td>
		                <td id="houseallfloor${house.id}">${house.allfloor}</td>
		                <td id="housebuildyear${house.id}">${house.buildyear}</td>
		                <td id="houseproper${house.id}">${house.proper}</td>
		                <td id="houseownership${house.id}">${house.ownership}</td>
		                <td id="housedecoration${house.id}">${house.decoration}</td>
		                <td id="housestate${house.id}">${house.state}</td>
		                <td>
		                    <button class="update-btn" onclick="divEdit(${house.id})">编辑</button>
		                    <button class="delete-btn">删除</button>
		                    <button class="photo-btn" onclick="runto('photo_a')">照片</button>
		                </td>
		            </tr>
		            </c:forEach>
		        </table>
		        <div class="foot">
		            <span class="message">反馈信息:</span>
		            <div style="float:right;margin-right:130px">
		            	<button class="page-btn" style="margin-left:430px;" onclick="divSearch()">查询</button>
		            	<button class="page-btn" onclick="divAdd()">添加</button>
			            <button class="page-btn" style=""><<</button>
			            <button class="page-btn"><</button>
			            <button class="page-btn">1</button>
			            <button class="page-btn">></button>
			            <button class="page-btn">>></button>
			            <span class="message">页容量:</span>
			            <select name="" id="" style="outline:none;border-radius:5px;">
			                <option value="1">1</option>
			                <option value="2">2</option>
			                <option value="3">3</option>
			                <option value="4">5</option>
			                <option value="10">10</option>
			                <option value="15">15</option>
			                <option value="20">20</option>
			            </select>
			            <span class="message">总记录数:</span>
		            </div>
		        </div>
		</div>
		
		<div class="informationChange" id="IC" style="display:none; width: 1000px;">
        	<div id="bartitle" style="width:100%;height:20px;font-size:16px;color:#white;text-align:center;font-weight:border;">信息录入</div>
        	<div style="width:100%;background-color: #c8c8c8;display：inline-block;">
	            <span class="topspan">注册编码：</span>
	            <input type="text" style="border-radius:2px;border:2px;text-align:center;outline:none;height:20px;width:200px;" id="type">
	            <span class="topspan">房源标题：</span>
	            <input type="text" style="border-radius:2px;border:2px;text-align:center;outline:none;height:20px;width:600px;" id="title">
 				<span class="topspan">房型：</span>
 				<input type="number" style="border-radius:2px;border:2px;outline:none;height:20px;width:25px;" id="shi">
 				<span>室</span>
 				<input type="number" style="border-radius:2px;border:2px;outline:none;height:20px;width:25px;" id="ting">
 				<span>厅</span>
 				<span class="partition">|</span>
 				<span class="topspan">面积：</span>
 				<input type="number" step="0.1" style="border-radius:2px;border:2px;outline:none;height:20px;width:70px;" id="area">
 				<span>平方米</span>
 				<span class="partition">|</span>
 				<span class="topspan">朝向：</span>
 				<select name="" id="orien" style="outline:none;border-radius:5px;">
			                <option >不限</option>
			                <option value="2">东</option>
			                <option value="3">南</option>
			                <option value="4">西</option>
			                <option value="5">北</option>
			                <option value="6">东南</option>
			                <option value="7">东北</option>
			                <option value="8">西南</option>
			                <option value="9">西北</option>
			    </select>
			    <span class="partition">|</span>
			    <span class="topspan">建造年份：</span>
			    <input type="number" style="border-radius:2px;border:2px;outline:none;height:20px;width:70px;" id="year">
			    <span>年</span>
			    <span class="partition">|</span>
			    <span class="topspan">楼层：</span>
			    <input type="number" style="border-radius:2px;border:2px;outline:none;height:20px;width:35px;" id="lou">
			    <span class="topspan">总楼层：</span>
			    <input type="number" style="border-radius:2px;border:2px;outline:none;height:20px;width:35px;" id="zlou">
			    <span class="partition">|</span>
			    <span class="topspan">所属区：</span>
 				<select name="" id="qu" style="outline:none;border-radius:5px;width:100px">
			                <option value="1">不限</option>
			                <option value="2">东</option>
			                <option value="3">南</option>
			                <option value="4">西</option>
			                <option value="5">北</option>
			                <option value="6">东南</option>
			                <option value="7">东北</option>
			                <option value="8">西南</option>
			                <option value="9">西北</option>
			    </select>
			    <span class="partition">|</span>
			    <span class="topspan">价格：</span>
 				<input type="number" step="0.1" style="border-radius:2px;border:2px;outline:none;height:20px;width:70px;" id="money">
 				<span>万元</span>
 				<span class="partition">|</span>
 				<span class="topspan">装修：</span>
 				<select name="" id="qu" style="outline:none;border-radius:5px;width:60px">
			                <option value="1">不限</option>
			                <option value="2">东</option>
			                <option value="3">南</option>
			                <option value="4">西</option>
			                <option value="5">北</option>
			                <option value="6">东南</option>
			                <option value="7">东北</option>
			                <option value="8">西南</option>
			                <option value="9">西北</option>
			    </select>
			    <span class="partition">|</span>
			    <span class="topspan">物业：</span>
 				<select name="" id="wuye" style="outline:none;border-radius:5px;width:60px">
			                <option value="1">不限</option>
			                <option value="2">东</option>
			                <option value="3">南</option>
			                <option value="4">西</option>
			                <option value="5">北</option>
			                <option value="6">东南</option>
			                <option value="7">东北</option>
			                <option value="8">西南</option>
			                <option value="9">西北</option>
			    </select>
			    <span class="partition">|</span>
			    <span class="topspan">产权：</span>
 				<select name="" id="chanquan" style="outline:none;border-radius:5px;width:100px">
			                <option value="1">不限</option>
			                <option value="2">东</option>
			                <option value="3">南</option>
			                <option value="4">西</option>
			                <option value="5">北</option>
			                <option value="6">东南</option>
			                <option value="7">东北</option>
			                <option value="8">西南</option>
			                <option value="9">西北</option>
			    </select>
			    <span class="partition" style="margin-left:100px;"></span>
			    <span class="topspan">售房人：</span>
 				<select name="" id="host" style="outline:none;border-radius:5px;width:80px">
			                <option value="1">不限</option>
			                <option value="2">东</option>
			                <option value="3">南</option>
			                <option value="4">西</option>
			                <option value="5">北</option>
			                <option value="6">东南</option>
			                <option value="7">东北</option>
			                <option value="8">西南</option>
			                <option value="9">西北</option>
			    </select>
			    <span class="partition">|</span>
			    <span class="topspan">状态：</span>
 				<select name="" id="zt" style="outline:none;border-radius:5px;width:60px">
			                <option value="1">不限</option>
			                <option value="2">东</option>
			                <option value="3">南</option>
			                <option value="4">西</option>
			                <option value="5">北</option>
			                <option value="6">东南</option>
			                <option value="7">东北</option>
			                <option value="8">西南</option>
			                <option value="9">西北</option>
			    </select>
            </div>
            
            
            <div style="margin-top:5px;">
	            <button class="delete-btn" style="float:right" onclick="divClose()" >取消</button> 
	            <button class="update-btn" id="add" style="float:right;diaplay:inline-block" onclick="" >添加</button>
            	<button class="delete-btn" id="save" style="float:right;diaplay:inline-block" onclick="" >保存</button>
            	<button class="delete-btn" id="search" style="float:right;diaplay:inline-block" onclick="" >查询</button>
        	</div>
        </div>
         <a href="${basePath}/welcome/photo" target="workspace" id="photo_a" style="visibility:hidden;"></a>
</div>

    <script>
    	function divAdd(){
    		document.getElementById("IC").style.display="";
    		document.getElementById("add").style.display="";
    		document.getElementById("save").style.display="none";
    		document.getElementById("search").style.display="none";
			document.getElementById("bartitle").innerText="信息录入";
    	}
    	
		function divEdit(id){
			document.getElementById("IC").style.display="";
			document.getElementById("save").style.display="";
			document.getElementById("add").style.display="none";
			document.getElementById("search").style.display="none";
			document.getElementById("bartitle").innerText="信息录入";
			let houseid = "houseid" + id;
			let housetitle = "housetitle" + id;
			let housesuite = "housesuite" + id;///
			let housearea = "housearea" + id;
			let housetowards = "housetowards" + id;
			let housefloor = "housefloor" + id;
			let houseallfloor = "houseallfloor" + id;
			let housebuildyear = "housebuildyear" + id;
			let houseproper = "houseproper" + id;
			let houseownership = "houseownership" + id;
			let housedecoration = "housedecoration" + id;
			let housestate = "housestate" + id;
			document.getElementById("type").value = document.getElementById(houseid).innerText;
			document.getElementById("title").value = document.getElementById(housetitle).innerText;
			document.getElementById("shi").value = document.getElementById(houseid).innerText;
			document.getElementById("ting").value = document.getElementById(houseid).innerText;
			document.getElementById("area").value = document.getElementById(housearea).innerText;
			//document.getElementById("orien").value = document.getElementById(housetowards).innerText;
			document.getElementById("orien").value = "东";
			document.getElementById("year").value = document.getElementById(housebuildyear).innerText;
			document.getElementById("lou").value = document.getElementById(housefloor).innerText;
			document.getElementById("zlou").value = document.getElementById(houseallfloor).innerText;
			document.getElementById("qu").value = document.getElementById(houseproper).innerText;
			//document.getElementById("money").value = document.getElementById("houseid").value;
			document.getElementById("zt").value = document.getElementById(housestate).innerText;
			
			
    	}
    	
    	
		function divSearch(){
			document.getElementById("IC").style.display="";
			document.getElementById("save").style.display="none";
			document.getElementById("add").style.display="none";
			document.getElementById("search").style.display="";
			document.getElementById("bartitle").innerText="信息查询";
			console.log(document.getElementById("bartitle").value)
		}
    	
    	function divClick(){
    		document.getElementById("IC").style.display="";
    	}
    	function divClose(){
    		document.getElementById("IC").style.display="none";
    	}
    	function runto(id){
            document.getElementById(id).click();
        }

    </script>
</body>
</html>