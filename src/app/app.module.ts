import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { XMLUtility } from '../utilities/XMLUtility';
import { HistoryUtility } from '../utilities/HistoryUtility';

import { Chroni } from './app.component';
import { About } from '../pages/about/about';
import { ImportFiles } from '../pages/importFiles/importFiles';
import { History, Name } from '../pages/history/history';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/profile/login';
import { ViewFiles, FileName } from '../pages/viewFiles/viewFiles';
import { FileBrowser } from '../pages/fileBrowser/fileBrowser';
import { AliquotDownloadPage } from '../pages/aliquot-download/aliquot-download';
import { HelpPage } from '../pages/help/help';

@NgModule({
  declarations: [
    Chroni,
    About,
    ImportFiles,
    History,
    Name,
    Profile,
    Login,
    ViewFiles,
    FileName,
    FileBrowser,
    AliquotDownloadPage,
    HelpPage
  ],
  imports: [
    IonicModule.forRoot(Chroni)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Chroni,
    About,
    ImportFiles,
    History,
    Profile,
    Login,
    ViewFiles,
    FileBrowser,
    AliquotDownloadPage,
    HelpPage
  ],
  providers: [
    Storage, XMLUtility, HistoryUtility,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
