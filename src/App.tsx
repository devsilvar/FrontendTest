import './App.css';
import FilteredList from './components/FilteredList';
import FormValidate from './components/FormValidate';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from './components/Toggle';
import TodoWrapper from './Todo/TodoWrapper';
import ClientSidePagination from './components/Paginated';
import FormWizard from './components/FormWizard';

function App() {
  return (
    <>
      <section className='position-absolute top-0 end-0 p-4'>
        <ToggleButton />
      </section>
      <main className='container mt-5'>
        <div className='row'>
          <section className='col-md-4 col-10 offset-md-0 offset-1'>
            <FormValidate />
            <div>
              <ClientSidePagination />
            </div>
          </section>
          <section className='col-md-4 col-10 offset-1 offset-md-0'>
            <FilteredList />
          </section>
          <section className='col-md-4 col-10 offset-1 offset-md-0'>
            <TodoWrapper />
            <FormWizard />
          </section>
        </div>
      </main>
    </>
  );
}
export default App;
