package com.example.fuelman.activity;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;

import com.example.fuelman.MainActivity;
import com.example.fuelman.R;

public class LoaderActivity extends AppCompatActivity {

    //sudo chmod 777 -R /dev/kvm

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_loader);

        ActionBar actionBar = getSupportActionBar();
        actionBar.hide();


        new Thread(new Runnable()
        {
            @Override
            public void run()
            {
                try
                {
                    Thread.sleep(3000);
                }
                catch (InterruptedException e)
                {
                    e.printStackTrace();
                }

                Intent intent = new Intent(LoaderActivity.this, LoginActivity.class);
                startActivity(intent);
                finish();
            }
        }).start();
    }
}
