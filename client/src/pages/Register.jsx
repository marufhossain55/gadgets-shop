import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register('email', { required: true })}
              />
              {errors.email?.type === 'required' && (
                <span className="text-red-500 text-sm font-light">
                  this field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register('password', { required: true, minLength: 6 })}
              />
              {errors.password?.type === 'required' && (
                <span className="text-red-500 text-sm font-light">
                  this field is required
                </span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-500 text-sm font-light">
                  password must be 6 character
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register('confirmPassword', {
                  required: true,
                  validate: (value) => {
                    if (watch('password') != value) {
                      return `your password doesn't match`;
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm font-light">
                  both field should match
                </span>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                register
              </button>
            </div>
          </form>
          <Link to="/login">already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
