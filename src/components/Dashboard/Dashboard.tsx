import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, setBoards, setCurrentBoardId } from '../../store';
import { Link } from 'react-router-dom';
import { ROUTES_URLS } from '../App/routes';



interface DashboardProps {
    expireIn: number;
    myBoards: Record<string, any>[];
    isLoadindBoards: boolean;
    onGetBoards: () => void;
    onGetCards: () => void;
    onSetCurrentBoardId: (id: string) => void;
}

class Dashboard extends React.Component<DashboardProps> {
    componentDidMount() {
        this.props.onGetBoards();
    }

    private renderOneBoard(boards: any[]) {
        return (
            boards.map((board, i) => {
                const divStyle = {
                    width: '195px',
                    height: '100px',
                    color: 'white',
                    backgroundImage: 'url(' + board.prefs.backgroundImage + ')',
                    backgroundColor: board.prefs.backgroundColor,
                    backgroundSize: 'cover'
                };

                return (
                    <Link key={i} to={ROUTES_URLS.CURRENT_BOARD}>
                        <div key={i} style={divStyle} onClick={() => this.props.onSetCurrentBoardId(board.id)}> {board.name}</div>
                    </Link>
                )
            })
        )
    }

    public render() {
        if (this.props.isLoadindBoards) {
            return (<div>Data is loading</div>)
        }

        return (
            <div>
                <h2>Доски</h2>
                <div>{this.renderOneBoard(this.props.myBoards)}</div>
            </div >
        )
    }
}

const mapStateToProps = ({ boards }: AppState) => {
    return {
        myBoards: boards.boardsData,
        isLoadindBoards: boards.isLoadindBoards,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onGetBoards: () => dispatch(setBoards()),
        onSetCurrentBoardId: (id: string) => dispatch(setCurrentBoardId(id))
    }
}

const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export { ConnectedDashboard as Dashboard }