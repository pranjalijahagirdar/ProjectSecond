import { Component } from '@angular/core';
import { Iai, Ibiology, Ibusiness, Icloud, Idatabase, Ieducation, Igeography, Imath, Ipsychology, Irobotic, ItechTool, IwebDev } from './model/post';
import { aiArr, biologyArr, businessArr, cloudArr, databaseArr, educationArr, geographyArr, mathArr, psychologyArr, roboticsArr, techToolsArr, webDevArr } from './const/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectSecond';
  aiArr : Array<Iai>=aiArr
  mathArr : Array<Imath>=mathArr;
  roboticsArr : Array<Irobotic>=roboticsArr;
  businessArr : Array<Ibusiness>=businessArr;
  geographyArr : Array<Igeography>=geographyArr;
  psychologyArr : Array<Ipsychology>=psychologyArr;
  biologyArr : Array<Ibiology>=biologyArr;
  techToolsArr : Array<ItechTool>=techToolsArr;
  educationArr : Array<Ieducation>=educationArr;
  cloudArr : Array<Icloud>=cloudArr;
  WebDevArr : Array<IwebDev>=webDevArr;
  databaseArr : Array<Idatabase>=databaseArr;
}
