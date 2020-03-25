import { run } from "./components/app";
import "./styles/main.scss";

import { AlertService } from "./components/alert.service";
import { ComponentService } from "./components/component.service";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
