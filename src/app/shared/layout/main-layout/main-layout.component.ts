import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from "../../components/preloader/preloader.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PageNavComponent } from "../../components/page-nav/page-nav.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-main-layout', 
  standalone: true,
  imports: [RouterOutlet, PreloaderComponent, FooterComponent, PageNavComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {}
