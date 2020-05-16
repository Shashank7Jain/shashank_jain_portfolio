import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "./components/resume/resume.component";

const routes: Routes = [
  {
    path: "resume",
    component: ResumeComponent,
    data: { imageURL: "../assets/images/resume.jpg" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
