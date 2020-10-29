function getEle(id){
    return document.getElementById(id);
}

function nhapSinhVien(){
    let MaSV = getEle("txtMaSV").value;
    let TenSV = getEle("txtTenSV").value;
    let LoaiSV = getEle("loaiSV").value;
    let Toan = getEle("txtDiemToan").value;
    let Ly = getEle("txtDiemLy").value;
    let Hoa = getEle("txtDiemHoa").value;
    let RenLuyen = getEle("txtDiemRenLuyen").value;

    let sinhvienMoi = new SinhVien(MaSV, TenSV, LoaiSV, Toan, Ly, Hoa, RenLuyen)
    let toan = parseFloat(sinhvienMoi.Toan);
    let ly = parseFloat(sinhvienMoi.Ly);
    let hoa = parseFloat(sinhvienMoi.Hoa);
    let diemTrungBinh = (toan + ly + hoa)/3;

    getEle("spanTenSV").innerHTML = sinhvienMoi.MaSV;
    getEle("spanMaSV").innerHTML = sinhvienMoi.MaSV;
    getEle("spanLoaiSV").innerHTML = sinhvienMoi.MaSV;
    getEle("spanDTB").innerHTML = diemTrungBinh;
}

var btnSubmit = getEle("btnSubmit");
btnSubmit.addEventListener('click', nhapSinhVien);