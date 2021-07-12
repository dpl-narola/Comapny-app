import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CompanyService } from 'src/app/Service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  persons = [];
  constructor(private service: CompanyService, private router: Router) { }
  token = localStorage.getItem('Token')
  ngOnInit(): void {
    
   this.getCompanyData()
  }
  getCompanyData() {
    this.service.getCompanyData().subscribe(
      (res: any) => {
        console.log(res);
        this.persons = res.response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onAddCompany() {
    this.router.navigate(['new-company']);
  }
}
