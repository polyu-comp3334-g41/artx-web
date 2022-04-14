import React, { Component } from "react";
import { get, post } from "../../utiles/request";
import { getContract, provider } from "../../utiles/ethUtils";
import { CONTRACT_ADDRESS, SERVER_URL } from "../../utiles/con";
import { ethers } from "ethers";

export default class Swap extends Component {
  state = {
    maker: {},
    taker: {},
  };

  saveMaker = async (event) => {
    let _id = event.target.value;
    this.setState({ maker: { _id } });

    //get tokenInfo by id
    await get(`/api/v1/artworks/${_id}`)
      .then((data) => {
        this.setState({ maker: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  saveTaker = async (event) => {
    let _id = event.target.value;
    this.setState({ taker: { _id } });

    await get(`/api/v1/artworks/${_id}`)
      .then((data) => {
        this.setState({ taker: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submit = async () => {
    const { maker, taker } = this.state;

    // Contract call
    const artXContract = await getContract();
    // Contract call
    console.log(`makeSwap(${maker.tokenId}, ${taker.tokenId})`)
    artXContract.makeSwap(maker.tokenId, taker.tokenId, {gasLimit: 1000000}).then((tr) => {
      alert(
        "Transaction sent: " +
          tr.hash +
          "\n\nPlease patiently wait for it to be confirmed..."
      );
    }).catch(err => {
        alert(err)
    })

    const filter = {
      address: CONTRACT_ADDRESS,
      topics: [ethers.utils.id("List(uint256,uint256)"), null, null],
    };


    console.log(maker)

    provider.once(filter, async (log) => {
      console.log(log);
      await post(`/api/v1/swap-orders?maker=${maker.author}`, {
        makerTokenId: maker._id,
        takerTokenId: taker._id,
      });

      alert("Successfully proposed a swap!");
    });
  };

  render() {
    return (
      <div>
        <p
          style={{ color: "var(--bs-gray-100)", fontSize: 30 }}
          text-align="center;"
        >
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          Enter token ID to swap:
        </p>
        <div className="table-responsive">
          <table
            className="table"
            align="center;"
            style={{ border: 0, borderCollapse: "collapse" }}
          >
            <thead>
              <tr />
            </thead>
            <tbody style={{ border: 0, borderCollapse: "collapse" }}>
              <tr>
                <td
                  align="right"
                  style={{ border: 0, borderCollapse: "collapse" }}
                >
                  <img
                    alt=""
                    src={this.state.maker.imageUrl}
                    style={{ width: 500, height: 500 }}
                  />
                </td>
                <td style={{ border: 0, borderCollapse: "collapse" }}>
                  <img
                    alt=""
                    src={this.state.taker.imageUrl}
                    style={{ width: 500, height: 500 }}
                    align="left;"
                  />
                </td>
              </tr>
              <tr>
                <td
                  align="right"
                  style={{ border: 0, borderCollapse: "collapse" }}
                >
                  <div
                    className="bg-faded p-5 rounded"
                    style={{ height: 100, width: 500 }}
                  >
                    <div className="form-label" style={{ fontSize: 15 }}>
                      Maker Token ID: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;&nbsp;
                      <input type="text" onChange={this.saveMaker} />
                    </div>
                  </div>
                </td>
                <td
                  align="left"
                  style={{ border: 0, borderCollapse: "collapse" }}
                >
                  <div
                    className="bg-faded p-5 rounded"
                    style={{ height: 100, width: 500 }}
                  >
                    <div className="form-label" style={{ fontSize: 15 }}>
                      Taker Token ID: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;&nbsp;
                      <input type="text" onChange={this.saveTaker} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          style={{ display: "block", margin: "0 auto" }}
          onClick={this.submit}
        >
          Make Swap
        </button>
      </div>
    );
  }
}
