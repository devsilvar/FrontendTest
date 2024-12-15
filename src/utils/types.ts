export interface ErrorProps {
    email: string | boolean;
}


export interface StateProps {
    states: string[];
}

export interface ChildrenProp {
    children:React.ReactNode;
  }
export interface ThemeContextType {
    theme: string;
    changeTheme: () => void;
  }
  
  export interface TodoStructure {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type DispatchActionProps =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number }
    | { type: 'EDIT_TODO'; payload: { id: number; text: string } };
  
export  interface TodoState {
    todos: TodoStructure[];
  }

  export interface InitialContext {
    state: TodoState;
    dispatch: React.Dispatch<DispatchActionProps>;
    
  }
  export interface FirstStepsProps {
    updateStage: (stage: number) => void;
    formik: any;
  }
  

  export interface TodoFormProps {
    todoToEdit?: { id: number; text: string };
  }
  