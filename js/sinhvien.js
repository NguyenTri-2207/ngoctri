function SinhVien(maSV, tenSV, loaiSV, toan, ly, hoa, renLuyen){
    this.MaSV = maSV;
    this.TenSV = tenSV;
    this.LoaiSV =  loaiSV;
    this.Toan = toan;
    this.Ly = ly;
    this.Hoa = hoa;
    this.RenLuyen = renLuyen;

    this.diemTrungBinh = function(){
        return (this.Toan + this.Ly + this.Hoa) / 3;
    }
}