import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {S3Bucket} from '../interface/S3Bucket';
import {S3Object} from '../interface/S3Object';

@Injectable({
  providedIn: 'root'
})


export class S3Service {
  private apiUrlLocal = 'http://127.0.0.1:5000';
  private apiUrlVercel = 'https://interdata-cli-api.vercel.app';
  private apiUrlVPS = 'http://103.20.96.236';
  //Phiên bản Angular 14 trở về trước:  constructor( private http: HttpClient ) { }
  http = inject(HttpClient);

  //1. Gọi API get List buckets
  getBuckets(): Observable<S3Bucket[]> {
    return this.http.get<S3Bucket[]>(`${this.apiUrlVPS}/buckets`);
  }

  //2. Gọi API get list objects IN bucket
  getBucketObjects(bucketName: string) :Observable<S3Object[]> {
    return this.http.get<S3Object[]>(`${this.apiUrlVPS}/${bucketName}/objects`);
  }

}
