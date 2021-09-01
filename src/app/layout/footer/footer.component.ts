import { Component, OnInit } from '@angular/core';
import * as constants from '../../shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyright: string = constants.Footer_leyend_copyright;

  constructor() { }

  ngOnInit(): void {
  }

}
