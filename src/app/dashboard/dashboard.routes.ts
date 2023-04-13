import { Routes } from "@angular/router";
import { IncomeExpenditureComponent } from "../income-expenditure/income-expenditure.component";
import { StatisticsComponent } from "../income-expenditure/statistics/statistics.component";
import { DetailsComponent } from "../income-expenditure/details/details.component";


export const dashboardRoutes: Routes =  [
  {path: '', component: StatisticsComponent},
  {path: 'income-expenditure', component: IncomeExpenditureComponent},
  {path: 'details', component: DetailsComponent},
]
