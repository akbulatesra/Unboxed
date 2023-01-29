import { useTranslation } from 'react-i18next';
import img from './SignupImage.svg';
import SignupForm from '../../components/signupForm/SignupForm';

const Signup = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-evenly tablet2:flex-col-reverse tablet2:items-center">
      <img src={img} alt="signup" className="w-2/5 mt-20 pt-10 tablet2:w-4/5" />
      <section className="w-2/5 tablet2:w-4/5">
        <h1 className=" font-normal text-5xl">{t('SIGNUP NOW')}</h1>
        <SignupForm />
      </section>
    </div>
  );
};
export default Signup;
