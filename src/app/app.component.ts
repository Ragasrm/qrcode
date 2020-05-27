import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codescan';

  qrData = null;
  createdCode = null;



  CretaQrCode() {
    if (this.qrData === null) {
      alert('no data to print qr code');
      return;
    }
    this.createdCode = this.qrData;

  }

  ScanQrCode() {

  }



  qrResultString: string;
  openScanner: boolean = false;

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(this.qrResultString);
    this.openScanner = !this.openScanner;
  }

  toggleScanner() {
    this.openScanner = !this.openScanner;
  }




}
