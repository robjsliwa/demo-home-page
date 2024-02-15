import "./index.css";
// eslint-disable-next-line
// @ts-ignore
import { DashboardLayout } from "@myorg/dashboard-layout";

export default function Root(props) {
  return (
    <section>
      <DashboardLayout tabs={[]} tabTitle={""}>
        <div>
          <h1>Home Page</h1>
          <p>Welcome to home page!</p>
        </div>
      </DashboardLayout>
    </section>
  );
}
