if(sessionStorage.getItem("namauser")==undefined || sessionStorage.getItem("namauser")==null)
{
$('#loginx').html('LOGIN | SIGNUP');
}
else
{
var nama=sessionStorage.getItem("nama");
var id=sessionStorage.getItem("id");

$('#loginx').html('<span>'+nama+' |</span> <span style="cursor:pointer;color:red"> LOGOUT</span>');
profil(id);
}

function anggota()
{
$('#tutup1').click();
$('#tutup1').css('display','block');
$('#btnac').css('display','none');
$('.modalx').css('display','none');
$('#anggota').css('display','block');
$('#modaltitle1').html('');
$('#modalfooter1').html('');
$('#modal-dialog1').removeClass('modal-sm modal-lg modal-xl modal-dialog-scrollable');
var myModal = new bootstrap.Modal(document.getElementById('modal1'), {
keyboard: false
})
myModal.show();
$('.modal-backdrop').hide();
$('#modal-dialog1').addClass('modal-fullscreen');
$('#modal1').css('background-color','rgba(0,0,0,0.6)');
$('#modaltitle1').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="spinner"></span> LIST ANGGOTA');
$.ajax({
     url: 'https://script.google.com/macros/s/AKfycbwEVFT7tq93yHOfEF_48u_Io9wFQ15ZldmO-LWNUBvu6lwZWNzsoTP3RdSqMNG3PpkLsQ/exec?id=1',
     type: "GET",
     dataType: "json",
     success: function(result){
     $('#anggota').html(result.response);
var anggota='';
for(var x=0;x<result.data.length;x++)
{
anggota=anggota+'<tr><td></td><td><a onclick="profil(\''+result.data[x]['id']+'\')" style="cursor:pointer;color:blue">'+result.data[x]['nama']+'</a></td><td>'+result.data[x]['npa']+'</td><td>'+result.data[x]['str']+'</td><td>'+result.data[x]['status_keanggotaan']+'</td></tr>';
}
$('#body-table-anggota').append(anggota);
var height=window.screen.height-380;
var dn=new DataTable('#table-anggota', {
"scrollY": height,
"scrollX": false,
"order": [[ 1, 'asc' ]],
"paging": false,
"scrollCollapse": true,
"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $('td:eq(0)', nRow).html(iDisplayIndexFull +1);
}
})
$('#spinner').css('display','none');
}
})
}

function profil(a)
{
$('#tutup1').click();
$('#tutup1').css('display','block');
$('#btnac').css('display','none');
$('.modalx').css('display','none');
$('#profil').css('display','block');
$('#modaltitle1').html('');
$('#modalfooter1').html('');
$('#modal-dialog1').removeClass('modal-sm modal-lg modal-xl modal-dialog-scrollable');
var myModal = new bootstrap.Modal(document.getElementById('modal1'), {
keyboard: false
})
myModal.show();
$('.modal-backdrop').hide();
$('#modal-dialog1').addClass('modal-fullscreen');
$('#modal1').css('background-color','rgba(0,0,0,0.6)');
$('#modaltitle1').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="spinner"></span> PROFIL ANGGOTA');
$('#profil').html('');

$.ajax({
     url: 'https://script.google.com/macros/s/AKfycbyPweBbXdGeA6tFY2xvAOkP0MurmHHZu95-DP9rwhMPrwH4SKzxa513MC1XQuXsWVfMtQ/exec?id=1&iduser='+a+'&sesi='+sessionStorage.getItem('sesi'),
     type: "GET",
     dataType: "json",
     success: function(result){
if(result.selisih>86400 && a==sessionStorage.getItem('id'))
{
sessionStorage.removeItem('namauser');
sessionStorage.removeItem('nama');
sessionStorage.removeItem('sesi');
window.location.reload();
}
$('#profil').html(result.response);
$('#spinner').css('display','none');
     }
})
}
  
function login()
{
$('#tutup1').click();
$('#tutup1').css('display','block');
$('#btnac').css('display','none');
$('.modalx').css('display','none');
$('#login').css('display','block');
$('#modaltitle1').html('');
$('#modalfooter1').html('');
$('#modal-dialog1').removeClass('modal-fullscreen modal-sm modal-lg modal-xl modal-dialog-scrollable');
var myModal = new bootstrap.Modal(document.getElementById('modal1'), {
keyboard: false
})
myModal.show();
$('.modal-backdrop').hide();
$('#modal-dialog1').addClass('modal-lg');
$('#modal1').css('background-color','rgba(0,0,0,0.6)');
if(sessionStorage.getItem("namauser")==undefined)
{
$('#modaltitle1').html('FORM LOGIN');
$('#login').html(`<nav>
<div class="nav nav-tabs" id="nav-tabx" role="tablist">
    <button class="nav-link active" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="true" onclick="$('#blogin').css('display','block')">LOGIN</button>
    <button class="nav-link" id="nav-reg-tab" data-bs-toggle="tab" data-bs-target="#nav-reg" type="button" role="tab" aria-controls="nav-reg" aria-selected="false" onclick="$('#blogin').css('display','none')">REGISTRASI</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContentx">
<div class="mb-2"></div>
  <div class="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
  <h4><i class="fa fa-coffee"></i> Please Enter Your Information</h4>
  <form class="form-floating" onsubmit="return input_login()" id="formlogin">
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="username" name="telpon" placeholder="NOMOR WA">
  <label>NOMOR WA</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="password" name="password" placeholder="PASSWORD">
  <label>PASSWORD</label>
</div>
<button type="submit" id="butlogin" style="display:none">SUBMIT</button>
</form>
  </div>
  <div class="tab-pane fade" id="nav-reg" role="tabpanel" aria-labelledby="nav-reg-tab">....</div>
</div>`);
$('#modalfooter1').html('<div class="spinner-border text-primary" role="status" style="display:none" id="spinner"><span class="visually-hidden">Loading...</span></div> <button type="button" class="btn btn-primary btn-sm" onclick="$(\'#butlogin\').click()" id="blogin">LOGIN</button> <button type="button" class="btn btn-danger btn-sm" onclick="$(\'#tutup1\').click()">CANCEL</button>');
}
else
{
$('#modaltitle1').html('LOGOUT');
$('#login').html('Apakah Anda ingin Log Out?');
var id=sessionStorage.getItem("id");
$('#modalfooter1').html('<div class="spinner-border text-primary" role="status" style="display:none" id="spinner"><span class="visually-hidden">Loading...</span></div> <button type="button" class="btn btn-primary btn-sm" onclick="logout()">LOGOUT</button> <button type="button" class="btn btn-success btn-sm" onclick="profil(\''+id+'\')">VIEW PROFILE</button> <button type="button" class="btn btn-danger btn-sm" onclick="$(\'#tutup1\').click()">CANCEL</button>');
}
}
 
var fileReader = new FileReader();
  var filterType = /^(?:image\/jpeg|image\/jpeg|image\/jpeg|image\/png|application\/pdf)$/i;
  fileReader.onload = function (event) {
  var image = new Image();
  
  image.onload=function(){
  var uploadFile = document.getElementById("fotoprofil2").files[0];

  var width = image.width;
  var height = image.height;

    
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var context=canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  $("#upload-Preview").html('<img src="'+canvas.toDataURL()+'" style="width:120px;border-radius:0.3em"/>');
  }
  image.src=event.target.result;
  }

var loadImageFile = function () {
  var uploadImage = document.getElementById("fotoprofil2");

  //check and retuns the length of uploded file.
  if (uploadImage.files.length === 0) { 
    return; 
  }
  
  //Is Used for validate a valid file.
  var uploadFile = document.getElementById("fotoprofil2").files[0];
  if (!filterType.test(uploadFile.type)) {
    alert("Please select a valid image."); 
    $('#FormControlFile').val('');
    return;
  }
  
  fileReader.readAsDataURL(uploadFile);
  }
  
function uploadfotoprofil(e)
{
$('#spinner2').css('display','block');
$('#butimg').attr('disabled',true);
const form = document.getElementById("fotoprofil");
    const file = form.fotoprofil.files[0];
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = (f) => {
      const url = "https://script.google.com/macros/s/AKfycbx2wNpuYLV8Nzz_gL164YAtn_Fh5-BYhjZsRkB53eW-zSQl72tuVU3nDzHVCzKyl-_b/exec"; 
      const qs = new URLSearchParams({
        filename: file.name,
        mimeType: file.type,
      });
      fetch(`${url}?${qs}`, {
        method: "POST",
        body: JSON.stringify({file: [...new Int8Array(f.target.result)], id: $("#iduser").val() }),
      })
    .then(res => res.json())
    .then(e => alerthasilupload(e.response))  // <--- You can retrieve the returned value here.
    .catch(err => alert(err));
    };
return false;
}
  
function alerthasilupload(a)
{
alert(a)
$("#spinner2").css("display","none");
$("#butimg").attr("disabled",false);
$("#fotoprofil2").val("");
}
  
function updatedata()
{
jQuery.ajax({
url: 'https://script.google.com/macros/s/AKfycbzGY25f38Nb94Pxk3ew_DA8LlhZSNWHQlGa4W4G8VM6AqMsrOm2ZUtA1e8C6kLiXfsdVA/exec?id=1',
type: 'post',
data: jQuery('#formidentitas').serialize(),
success: function(result) {
}
})
return false;
}
