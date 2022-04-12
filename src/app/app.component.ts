import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from './shared/toastr.service';
import { TransactionsService } from './shared/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MFS Assignment'
  query: string = "Vodafone Ghana"
  transactions: any = []

  dateGroup = new FormGroup({
    accountStartDate: new FormControl(),
    accountEndDate: new FormControl()
  })
  activeRow!: number
  activeEdit: any = {
    value_date: '',
    movement_type: '',
    status: ''
  }

  constructor(private transactionsService: TransactionsService, private toastr: ToastrService){}

  ngOnInit(){
    this.transactionsService.getTransactions().subscribe((res: any)=>{
      this.transactions = res
      for(let transaction of this.transactions){
        transaction.amountHandle = 'password'
      }
    })
  }
  
  clearQuery(){
    this.query = ""
  }

  searchTransaction(id: string){
    let allTransactions
    this.transactionsService.getTransactions().subscribe((res: any)=>{
      allTransactions = res
      for(let transaction of allTransactions){
        transaction.amountHandle = 'password'
      }
    })

    this.transactions = allTransactions
    this.transactions = this.transactions.filter((transaction: any)=>{ 
      let fullId = transaction.id + ''
      return fullId.includes(id) 
    })
  }

  filterDate(){
    let allTransactions
    this.transactionsService.getTransactions().subscribe((res: any)=>{
      allTransactions = res
      for(let transaction of allTransactions){
        transaction.amountHandle = 'password'
      }
    })

    let start = + new Date(this.dateGroup.value.accountStartDate)
    let end = + new Date(this.dateGroup.value.accountEndDate)
    
    this.transactions = allTransactions
    this.transactions = this.transactions.filter((transaction: any)=>{ 
      let value_date = + new Date(transaction.value_date)
      return value_date >= start && value_date <= end
    })
  }

  selectAll(e: any){
    for(let transaction of this.transactions){
      transaction.selected = e.checked
    }
  }

  selectRow(e: any, id: number){
    let transaction = this.transactions.find((transaction: any) => transaction.id == id)
    transaction.selected = e.checked
  }

  editTransaction(id: number){
    this.activeRow = id
    this.activeEdit = this.transactions.find((transaction: any) => transaction.id == id)
  }

  editRow(transaction: any){
    this.transactionsService.editTransaction(this.activeRow, transaction).subscribe((res: any)=>{
      if(res){
        this.transactions = res
        this.toastr.success("Row updated successfully")
      }
      else {
        this.toastr.error("An error has occurred. Please try again")
      }
    })
  }

  deleteTransaction(id: number){
    this.activeRow = id
  }

  deleteRow(){
    this.transactionsService.deleteTransaction(this.activeRow).subscribe((res: any)=>{
      if(res){
        this.transactions = res
        this.toastr.success("Row deleted successfully")
      }
      else {
        this.toastr.error("An error has occurred. Please try again")
      }
    })
  }

  toggleAmount(id: number){
    let transaction = this.transactions.find((transaction: any) => transaction.id == id)
    if(transaction.amountVisibility){
      transaction.amountHandle = 'password'
      transaction.amountVisibility = false
    }
    else {
      transaction.amountHandle = 'text'
      transaction.amountVisibility = true
    }
  }
}
