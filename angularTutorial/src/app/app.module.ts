import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Để sử dụng được ngModel phải khai báo FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// HTTP: xử dụng để thay đổi data
import { HttpClientModule }    from '@angular/common/http';
// import HttpClientInMemoryWebApiModule  de su dung luu du lieu thay doi
import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { InMemoryDataService  } from './in-memory-data.service';
import { PeopleSearchComponent } from './people-search/people-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent,
    PeopleDetailComponent,
    MessageComponent,
    DashboardComponent,
    PeopleSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    /* HttpClientInMemoryWebApiModule module chặn các request http 
    *  và trả về phản hồi từ máy chủ mô phỏng.
    *  Sẽ xóa nó đi khi mà máy chủ thật đã sẵn sàng nhận các request.
    */
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
