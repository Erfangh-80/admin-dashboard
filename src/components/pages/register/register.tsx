import logo from "../../../assets/react.svg";
import {
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router-dom";
import { ControlTextInput } from "../../molecules";
import { useForm } from "react-hook-form";
import { httpServices } from "../../../core/http-service";
import { useEffect } from "react";

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

  const submitForm = useSubmit();

  const onSubmit = (data: IProps) => {
    const { confirmPassword, ...userData } = data;
    submitForm(userData, { method: "POST" });
  };

  const password = watch("password");

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const isSuccessOperation = useActionData();

  const navigate = useNavigate();
  const routeErrors = useRouteError();

  useEffect(() => {
    if (isSuccessOperation) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, []);

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
                  name="mobile"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-lg btn-primary"
                >
                  {isSubmitting ? "درحال انجام عملیات" : "ثبت نام کنید"}
                </button>
              </div>
              {isSuccessOperation ? (
                <div className="alert alert-success text-success p-2 mt-3">
                  عملیات با موفقیت انجام شد. به صفحه ورود منتقل میشوید
                </div>
              ) : null}
              {routeErrors ? (
                <div className="alert alert-danger text-danger p-2 mt-3">
                  {(routeErrors as any).response?.data.map(
                    (error: any, index: number) => (
                      <p key={index} className="mb-0">
                        {error.description}
                      </p>
                    )
                  )}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export async function registerAction({ request }: any) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpServices.post("/Users", data);
  return response.status === 200;
}
