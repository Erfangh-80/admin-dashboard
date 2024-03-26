import logo from "../../../assets/react.svg";
import { Link } from "react-router-dom";
import { ControlTextInput } from "../../molecules";
import { useForm } from "react-hook-form";

interface IProps {
  mobile: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<IProps>();

  const onSubmit = (data: IProps) => console.log("data", data);

  const password = watch("password");

  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت استفاده از ویژگی های پلتفرم آموزش آنلاین کلاسبن ثبت نام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          <Link to="/login" className="me-2">
            وارد شوید{" "}
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <ControlTextInput
                  name="username"
                  label="موبایل"
                  control={control}
                  rules={{ required: "شماره تماس را وارد کنید" }}
                  errors={errors}
                />
              </div>
              <div className="mb-3">
                <ControlTextInput
                  name="password"
                  label="رمز عبور"
                  control={control}
                  rules={{ required: "رمز عبور را وارد کنید" }}
                  errors={errors}
                />
              </div>
              <div className="mb-3">
                <ControlTextInput
                  name="confirmPassword"
                  label="تکرار رمز عبور"
                  control={control}
                  rules={{
                    required: "رمز عبور وارد شده را تکرار کنید",
                    validate: (value: string) =>
                      value === password || "رمز عبور شما تطابق ندارد",
                  }}
                  errors={errors}
                />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  ثبت نام کنید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export async function registerAction({ request: Reqiest }) {
  // const formData = await request.formData()
}
