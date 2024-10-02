import logo from "../../../assets/react.svg";
import { Link } from "react-router-dom";
import { ControlTextInput } from "../../molecules";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => {};
  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام نکرده اید؟
          <Link to="/register" className="me-2">
            ثبت نام کنید
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <ControlTextInput
                  control={control}
                  name="mobile"
                  errors={errors}
                  label="موبایل"
                  rules={{ required: "شماره تماس را وارد کنید" }}
                />
              </div>
              <div className="mb-3">
                <ControlTextInput
                  control={control}
                  name="password"
                  errors={errors}
                  label="رمز عبور"
                  rules={{ required: "رمز عبور را وارد کنید" }}
                />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  وارد شوید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
