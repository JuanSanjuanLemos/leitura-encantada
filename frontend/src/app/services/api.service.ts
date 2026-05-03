import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }


  uploadPdf(file: File) {
    const formData = new FormData();
    formData.append('pdfFile', file);

    return this.http.post('http://localhost:3000/extract-text', formData);
  }
}
