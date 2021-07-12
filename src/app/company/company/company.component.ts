import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private service: CompanyService
  ) {}

  CategoryList = [
    { lable: 'IT', value: 'sales' },
    { lable: 'Electronics', value: 'purchase' },
    { lable: 'Finance', value: 'finance' },

  ];
  selectedCat = 'selectedCat';
  currentDate = new Date();
  register_date: any;
  token = localStorage.getItem('Token')

  ngOnInit(): void {
    if (!this.token) {
      this.router.navigate(['/new-company']);
    }
    this.register_date = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    console.log(this.register_date);
  }
  onSubmit(form: NgForm) {
    const requestPayload = {
      fields: [
        {
          element_name: 'company_name',
          value: form.value.company_name,
        },
        
        {
          element_name: 'category',
          value: form.value.category,
        },
        {
          element_name: 'register_date',
          value: this.register_date,
        },
        {
          element_name: 'annual_trunover',
          value: form.value.annual_trunover,
        },
      ],
    };
    console.log(requestPayload);

    this.service.createCompany(requestPayload).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
