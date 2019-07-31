import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  pageTitle: any;

  viewID: any;
  title1: any;
  subtitle1: any;
  requirements1: any;

  title2: any;
  subtitle2: any;
  requirements2: any;

  title3: any;
  subtitle3: any;
  requirements3: any;


  constructor(
    public routing: ActivatedRoute
  ) { }

  ngOnInit() {
    this.viewID = this.routing.snapshot.paramMap.get('id');
    this.show()
  }

  show() {
    if (this.viewID == "1") {
      this.pageTitle="Web Development Jobs";

      this.title1 = "Web Developer";
      this.subtitle1 = "Microsoft";
      this.requirements1 = "HTML5, CSS3, JavaScript, Angular, Familiar with AWS";

      this.title2 = "Junior Web Developer";
      this.subtitle2 = "Verizon";
      this.requirements2 = "HTML5, CSS3, Javascript";

      this.title3 = "Full Stack Developer";
      this.subtitle3 = "Cisco";
      this.requirements3 = "HTML, CSS3, JavaScript, node.js,PHP,MongoDb";
    }

    else if (this.viewID == "2") {
      this.pageTitle="Software Engineer Jobs";

      this.title1 = "Software Engineer";
      this.subtitle1= "IBM";
      this.requirements1 = "Agile Methodologies, SharePoint, MS Access";

      this.title2 = "Senior Software Engineer";
      this.subtitle2 = "pwc";
      this.requirements2 = "3 years experience in professional software development";

      this.title3 = "Software Engineer in test";
      this.subtitle3 = "Cisco";
      this.requirements3 = "C++, PHP, Java, Selenium";
    }
    else if (this.viewID == "3") {
      this.pageTitle="Data Analyst Jobs";

      this.title1 = "Junior Data Analyst";
      this.subtitle1 = "Facebook";
      this.requirements1 = "SQL, MS Excel, StatTools";

      this.title2 = "Juinor Data Analyst";
      this.subtitle2 = "Deloitte";
      this.requirements2 = "Data Manupilation, Data Archiving, SQL, Ms Excel";

      this.title3 = "Data Analyst";
      this.subtitle3 = "Philips";
      this.requirements3 = "VBA, Ms Excel,StatTools,Statistical data";
    }
   
    }

  }


