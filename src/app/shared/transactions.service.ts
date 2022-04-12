import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class TransactionsService {
    //FUNCTIONS HERE RETURN OBSERVABLES TO MIMIC HOW A REAL API ENDPOINT WOULD WORK
    getTransactions(){
        return new Observable((observer)=>{observer.next(TRANSACTIONS)})
    }
    deleteTransaction(id: number){
        TRANSACTIONS.splice(TRANSACTIONS.findIndex((transaction: any) => transaction.id == id), 1)
        return new Observable((observer)=>{observer.next(TRANSACTIONS)})
    }
    editTransaction(id: number, transaction: any){
        let x = TRANSACTIONS.find((y: any) => y.id == id)
        x!.movement_type = transaction.movement_type
        x!.value_date = transaction.value_date
        x!.status = transaction.status

        return new Observable((observer)=>{observer.next(TRANSACTIONS)})
    }
}

const TRANSACTIONS = [
    {
        id: 1480636587,
        movement_type: 'Money Transfer',
        amount: '1,500.000 UGX',
        status: 'Active',
        value_date: '2022-01-14'
    },
    {
        id: 1480636588,
        movement_type: 'Airtime',
        amount: '1,500.000 UGX',
        status: 'Error',
        value_date: '2022-01-15'
    },
    {
        id: 1480636589,
        movement_type: 'Money Transfer',
        amount: '1,500.000 UGX',
        status: 'Active',
        value_date: '2022-01-17'
    },
    {
        id: 1480636590,
        movement_type: 'Collection',
        amount: '1,500.000 UGX',
        status: 'Active',
        value_date: '2022-01-18'
    },
    {
        id: 1480636591,
        movement_type: 'Airtime',
        amount: '1,500.000 UGX',
        status: 'Error',
        value_date: '2022-01-19'
    },
    {
        id: 1480636592,
        movement_type: 'Money Transfer',
        amount: '1,500.000 UGX',
        status: 'Active',
        value_date: '2022-01-20'
    },
    {
        id: 1480636593,
        movement_type: 'Collection',
        amount: '1,500.000 UGX',
        status: 'Active',
        value_date: '2022-01-21'
    },
    {
        id: 1480636594,
        movement_type: 'Airtime',
        amount: '1,500.000 UGX',
        status: 'Error',
        value_date: '2022-01-24'
    },
    {
        id: 1480636595,
        movement_type: 'Airtime',
        amount: '1,500.000 UGX',
        status: 'Hold',
        value_date: '2022-01-25'
    },
    {
        id: 1480636596,
        movement_type: 'Money Transfer',
        amount: '1,500.000 UGX',
        status: 'Active',
        value_date: '2022-01-26'
    },
]