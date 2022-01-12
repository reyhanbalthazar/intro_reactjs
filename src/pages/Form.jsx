import React from 'react';

class FormPage extends React.Component {
    constructor(props) {
        super(props);
        // local data component
        this.state = {
            counter: 0,
            nama: "Reyhan",
            angkaPertama: 0,
            angkaKedua: 0,
            hasil: 0
        }
    }

    // membuat fungsi dalam class component react
    btnIncrement = (num) => {
        this.state.counter += num
        // this.setState({ propertiState : dataTerbarunya }) fungsinya untuk melakukan update data pada state
        this.setState({
            counter: this.state.counter
        })
    }

    btnDecrement = (num) => {
        this.setState({
            counter: this.state.counter -= num
        })
    }

    btSubmit = () => {
        console.log(this.refs.nama.value)
        this.setState({ nama: this.refs.nama.value })
        alert()
    }

    btnTambah = () => {
        this.setState({
            hasil: parseInt(this.refs.angkaPertama.value) + parseInt(this.refs.angkaKedua.value)
        })
    }

    btnKurang = () => {
        this.setState({
            hasil: this.refs.angkaPertama.value - this.refs.angkaKedua.value
        })
    }

    btnKali = () => {
        this.setState({
            hasil: this.refs.angkaPertama.value * this.refs.angkaKedua.value
        })
    }

    btnBagi = () => {
        this.setState({
            hasil: this.refs.angkaPertama.value / this.refs.angkaKedua.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row m-5 border p-5" style={{ display: "flex", justifyContent: "center" }}>
                    <input id="nama" type="text" ref="nama" />
                    <h4 style={{ textAlign: "center" }}>{this.state.nama}</h4>
                    <button type="button" onClick={this.btSubmit}>Submit</button>
                </div>
                <div className="d-flex" style={{ justifyContent: "center" }}>
                    <button type="button" className="btn btn-warning" onClick={() => this.btnDecrement(2)}>Decrement</button>
                    <h1 className="m-5">{this.state.counter}</h1>
                    <button type="button" className="btn btn-primary" onClick={() => this.btnIncrement(4)}>Increment</button>
                </div>
                <hr />
                {/* CALCULATOR */}
                <div className="d-flex m-5" style={{ justifyContent: "space-around" }}>
                    <input id="angka-1" type="number" ref="angkaPertama" />
                    <input id="angka-2" type="number" ref="angkaKedua" />
                </div>
                <div className="d-flex m-5" style={{ justifyContent: "space-around" }}>
                    <button type="button" className="btn btn-primary" onClick={this.btnTambah}>Tambah</button>
                    <button type="button" className="btn btn-primary" onClick={this.btnKurang}>Kurang</button>
                    <button type="button" className="btn btn-primary" onClick={this.btnKali}>Kali</button>
                    <button type="button" className="btn btn-primary" onClick={this.btnBagi}>Bagi</button>
                </div>
                <h1 style={{ textAlign: "center" }}>{this.state.hasil}</h1>
            </div>
        );
    }
}

export default FormPage;