import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qrData = null;
  createdCode =null;
  ScannedCode = null;

  title = 'qrcodeTask';



  CretaQrCode() {
    if(this.qrData === null) {
      alert('no data to print qr code');
      return
    }
    this.createdCode = this.qrData;

  }

  ScanQrCode() {

  }



}
