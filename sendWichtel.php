<?php
    include('inc/functions.php');

    $postdata = file_get_contents("php://input");
    $response = json_decode($postdata);
    $finalWichtel = array();

    sendWichtel($response);

    function sendWichtel($response) {
        $initWichtel = $response[0];
        $wichtel = $initWichtel;
        $email = $response[1];
        $sender = $response[2];

        $i=0;
        while(!empty($wichtel)) {
            $zufallWichtel = rand(0, count($wichtel)-1);
            $zufallEmail = rand(0, count($wichtel)-1);

            if ($wichtel[$zufallWichtel]->email == $email[$zufallEmail]->email && count($wichtel) == 1) {
                sendWichtel($response);

            } else if ($wichtel[$zufallWichtel]->email != $email[$zufallEmail]->email) {
                if(count($wichtel) != 1) {
                    $zufallsWichtel[$i] = array(
                        name => $wichtel[$zufallWichtel]->name,
                        email => $email[$zufallEmail]->email
                    );
                    $wichtel = unset_array($wichtel, $zufallWichtel);
                    $email = unset_array($email, $zufallEmail);
                    $i++;

                } else if(count($wichtel) == 1) {
                    $zufallsWichtel[$i] = array(
                        name => $wichtel[0]->name,
                        email => $email[$zufallEmail]->email
                    );
                    $wichtel = unset_array($wichtel, 0);
                    $email = unset_array($email, 0);

                    sicherungskopie($zufallsWichtel, "sicherungskopie.txt");
                    mailWichtel($zufallsWichtel, $sender);

                    echo true;
                    return;
                }
            }
        }
    }