import { Component, Input, OnInit } from "@angular/core";
import { GlobalVariable } from "src/global";

@Component({
	selector: "app-top-bar",
	templateUrl: "./top-bar.component.html",
	styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
	@Input() title: string = "";

	constructor() {}

	ngOnInit(): void { }


}
