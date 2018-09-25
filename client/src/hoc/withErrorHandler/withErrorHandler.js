import React from 'react'
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }
        
        reqInterceptor = null;
        resInterceptor = null;

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                console.log("Intger")
                this.setState({error: null})
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                console.log("Interceptor")
                this.setState({error: err})
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        erroeConfirmHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <div>
                    <Modal isShow={this.state.error} 
                    closeModal={this.erroeConfirmHandler}
                    >{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}


export default withErrorHandler
